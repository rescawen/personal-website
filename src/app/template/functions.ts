"use server";
import { requestInfo } from "rwsdk/worker";
import { sessions } from "@/session/store";

export async function changeLanguage(lang: string) {
  const { ctx, headers } = requestInfo;

  await ctx.i18n.changeLanguage(lang);
  await sessions.save(headers, { language: lang });
}
