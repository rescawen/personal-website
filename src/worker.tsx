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

export default defineApp([
  setCommonHeaders(),
  async ({ ctx, request, headers }) => {
    setupSessionStore(env);

    const session = await sessions.load(request);

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

    // Check if URL contains language parameter
    const url = new URL(request.url);
    const pathSegments = url.pathname.split("/").filter(Boolean);
    const urlLang = pathSegments[0];
    const allowedLangs = ["en", "fi"];

    // Determine language priority: URL param > session > default
    let lng = session?.language || "en";
    if (urlLang && allowedLangs.includes(urlLang)) {
      lng = urlLang;
      // Update session if URL language differs from stored language
      if (session?.language !== urlLang) {
        await sessions.save(headers, { language: urlLang });
      }
    }

    const resources = { en, fi };

    const i18n = i18next.createInstance();
    await i18n.init({
      lng,
      fallbackLng: "en",
      resources,
      interpolation: { escapeValue: false },
    });
    ctx.i18n = i18n;
    ctx.translate = i18n.t.bind(i18n);
  },
  async ({ ctx, request, headers }) => {
    // Handle root path redirect to default language
    const url = new URL(request.url);
    if (url.pathname === "/") {
      return new Response(null, {
        status: 302,
        headers: { Location: "/en" },
      });
    }

    // Handle invalid language redirects
    const pathSegments = url.pathname.split("/").filter(Boolean);
    const urlLang = pathSegments[0];
    const allowedLangs = ["en", "fi"];

    if (pathSegments.length > 0 && !allowedLangs.includes(urlLang)) {
      return new Response(null, {
        status: 302,
        headers: { Location: "/en" },
      });
    }
  },
  render(Document, [route("/:lang", Home)]),
]);
