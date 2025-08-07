import { defineApp, ErrorResponse } from "rwsdk/worker";
import { render, route } from "rwsdk/router";

import { Document } from "@/app/Document";
import { Home } from "@/app/pages/Home";
import { Showcase } from "@/app/pages/Showcase";
import { Projects } from "@/app/pages/Projects";
import { Esports } from "@/app/pages/Esports";
import { setCommonHeaders } from "@/app/headers";

import { sessions, setupSessionStore } from "./session/store";
import { Session } from "./session/durableObject";
import { env } from "cloudflare:workers";
export { SessionDurableObject } from "./session/durableObject";

import type { i18n as i18nType } from "i18next";
import i18next from "i18next";
import en from "@/app/translations/en.json";
import fi from "@/app/translations/fi.json";

export type AppContext = {
  session: Session | null;
  i18n: i18nType;
  translate: i18nType["t"];
};

// Helper functions
async function loadSession(request: Request) {
  setupSessionStore(env);
  return await sessions.load(request);
}

function parseUrlLanguage(url: URL) {
  const pathSegments = url.pathname.split("/").filter(Boolean);
  const urlLang = pathSegments[0];
  const allowedLangs = ["en", "fi"];
  return { urlLang, pathSegments, allowedLangs };
}

function shouldRedirectRoot(pathname: string) {
  return pathname === "/";
}

function shouldRedirectInvalidLanguage(
  pathSegments: string[],
  allowedLangs: string[]
) {
  const urlLang = pathSegments[0];
  return pathSegments.length > 0 && !allowedLangs.includes(urlLang);
}

function determineLanguage(
  urlLang: string | undefined,
  allowedLangs: string[],
  session: any
) {
  if (urlLang && allowedLangs.includes(urlLang)) {
    return urlLang;
  }
  return session?.language || "en";
}

// Cache for i18n instances by language
const i18nCache: Record<string, i18nType> = {};

async function setupI18n(language: string) {
  if (!i18nCache[language]) {
    console.log(`DEBUG: Creating new i18n instance for "${language}"`);
    const resources = { en, fi };
    const i18n = i18next.createInstance();
    await i18n.init({
      lng: language,
      fallbackLng: "en",
      resources,
      interpolation: { escapeValue: false },
    });
    i18nCache[language] = i18n;
  } else {
    console.log(`DEBUG: Using cached i18n instance for "${language}"`);
  }
  return i18nCache[language];
}

export default defineApp([
  setCommonHeaders(),
  async ({ ctx, request, headers }) => {
    // Load session
    const session = await loadSession(request);

    // Handle session errors
    try {
      session;
    } catch (error) {
      if (error instanceof ErrorResponse && error.code === 401) {
        await sessions.remove(request, headers);
        headers.set("Location", "/");
        return new Response(null, {
          status: 302,
          headers,
        });
      }
      throw error;
    }

    console.log("Session language:", session?.language);

    // Parse URL
    const url = new URL(request.url);
    const { urlLang, pathSegments, allowedLangs } = parseUrlLanguage(url);

    // Handle root redirect to preferred language
    if (shouldRedirectRoot(url.pathname)) {
      const preferredLang = session?.language || "en";
      console.log("DEBUG: Root redirect - session:", session);
      console.log("DEBUG: Preferred language:", preferredLang);
      return new Response(null, {
        status: 302,
        headers: { Location: `/${preferredLang}` },
      });
    }

    // Handle invalid language redirects
    if (shouldRedirectInvalidLanguage(pathSegments, allowedLangs)) {
      return new Response(null, {
        status: 302,
        headers: { Location: "/en" },
      });
    }

    // Determine final language
    const lng = determineLanguage(urlLang, allowedLangs, session);

    // Update session if URL language differs from stored language
    // Only for HTML page requests, not assets
    const isPageRequest = request.headers.get("accept")?.includes("text/html");
    if (
      urlLang &&
      allowedLangs.includes(urlLang) &&
      session?.language !== urlLang &&
      isPageRequest
    ) {
      console.log(
        "DEBUG: Saving session - old:",
        session?.language,
        "new:",
        urlLang
      );
      console.log("DEBUG: URL causing session save:", request.url);
      console.log("DEBUG: Full pathname:", url.pathname);
      console.log("DEBUG: Is page request:", isPageRequest);
      await sessions.save(headers, { language: urlLang });
    }

    // Setup i18n - lazy initialization and cached per language
    const i18n = await setupI18n(lng);
    ctx.i18n = i18n;
    ctx.translate = i18n.t.bind(i18n);
  },
  render(Document, [
    route("/:lang", Home),
    route("/:lang/showcase", Showcase),
    route("/:lang/projects", Projects),
    route("/:lang/esports", Esports),
  ]),
]);
