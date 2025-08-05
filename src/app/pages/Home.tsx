import { RequestInfo } from "rwsdk/worker";
import NavigationBarWrapper from "../template/NavigationBarWrapper";
import ThemeSwitcher from "../template/ThemeSwitcher";
import LanguageSwitcher from "../template/LanguageSwitcher";

export function Home({ ctx, params }: RequestInfo) {
  const { lang } = params;
  const currentLang = lang;

  // Ensure i18n is updated to match URL parameter
  if (ctx.i18n.language !== lang) {
    ctx.i18n.changeLanguage(lang);
  }

  return (
    <div className="bg-off-white dark:bg-dark-brown dark:text-light-beige h-screen overflow-hidden">
      <div className="flex justify-end p-4 mr-[23rem]">
        <LanguageSwitcher currentLang={currentLang} />
        <ThemeSwitcher />
      </div>
      <NavigationBarWrapper />
    </div>
  );
}
