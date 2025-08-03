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
    const lng = session?.language || "en";
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
  render(Document, [route("/", Home)]),
]);
