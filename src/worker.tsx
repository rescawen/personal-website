import { defineApp, ErrorResponse } from "rwsdk/worker";
import { render, route } from "rwsdk/router";

import { Document } from "@/app/Document";
import { Home } from "@/app/pages/Home";
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
  allowedLangs: string[],
) {
  const urlLang = pathSegments[0];
  return pathSegments.length > 0 && !allowedLangs.includes(urlLang);
}

function determineLanguage(
  urlLang: string | undefined,
  allowedLangs: string[],
  session: any,
) {
  if (urlLang && allowedLangs.includes(urlLang)) {
    return urlLang;
  }
  return session?.language || "en";
}

async function setupI18n(language: string) {
  const resources = { en, fi };
  const i18n = i18next.createInstance();
  await i18n.init({
    lng: language,
    fallbackLng: "en",
    resources,
    interpolation: { escapeValue: false },
  });
  return i18n;
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

    // Parse URL
    const url = new URL(request.url);
    const { urlLang, pathSegments, allowedLangs } = parseUrlLanguage(url);

    // Handle root redirect to preferred language
    if (shouldRedirectRoot(url.pathname)) {
      const preferredLang = session?.language || "en";
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
    if (
      urlLang &&
      allowedLangs.includes(urlLang) &&
      session?.language !== urlLang
    ) {
      await sessions.save(headers, { language: urlLang });
    }

    // Setup i18n
    const i18n = await setupI18n(lng);
    ctx.i18n = i18n;
    ctx.translate = i18n.t.bind(i18n);
  },
  render(Document, [route("/:lang", Home)]),
]);
