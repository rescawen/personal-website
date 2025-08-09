import { requestInfo } from "rwsdk/worker";
import NavigationBar from "./NavigationBar";

export default function NavigationBarWrapper() {
  const { ctx, request } = requestInfo;
  const currentPath = new URL(request.url).pathname;
  const currentLang = ctx.i18n.language || "en";

  const NAV_LINKS_CONFIG = [
    { href: `/${currentLang}`, label: ctx.translate("about_me") },
    { href: `/${currentLang}/showcase`, label: ctx.translate("showcase") },
    { href: `/${currentLang}/projects`, label: ctx.translate("projects") },
    { href: `/${currentLang}/esports`, label: ctx.translate("esports") },
  ];

  return (
    <NavigationBar navLinks={NAV_LINKS_CONFIG} currentPath={currentPath} />
  );
}
