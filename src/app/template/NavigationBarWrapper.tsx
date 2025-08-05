import { RequestInfo, requestInfo } from "rwsdk/worker";
import NavigationBar from "./NavigationBar";

export default function NavigationBarWrapper() {
  const { ctx } = requestInfo;
  const NAV_LINKS_CONFIG = [
    { href: "/", label: ctx.translate("about_me") },
    { href: "/showcase", label: ctx.translate("showcase") },
    { href: "/projects", label: ctx.translate("projects") },
    { href: "/esports", label: ctx.translate("esports") },
  ];

  return <NavigationBar navLinks={NAV_LINKS_CONFIG} />;
}
