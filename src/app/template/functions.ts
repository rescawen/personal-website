"use server";
import { requestInfo } from "rwsdk/worker";
import { sessions } from "@/session/store";

export function getCurrentLanguage(): string {
  const { ctx } = requestInfo;
  return ctx.i18n.language;
}

export async function changeLanguage(lang: string) {
  const { ctx, headers } = requestInfo;

  await ctx.i18n.changeLanguage(lang);
  await sessions.save(headers, { language: lang });
}
