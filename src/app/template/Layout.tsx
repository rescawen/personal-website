import { RequestInfo } from "rwsdk/worker";
import NavigationBarWrapper from "./NavigationBarWrapper";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";

interface LayoutProps {
  ctx: any;
  params: any;
  children: React.ReactNode;
}

export function Layout({ ctx, params, children }: LayoutProps) {
  const { lang } = params;
  const currentLang = lang;

  // Ensure i18n is updated to match URL parameter
  if (ctx.i18n.language !== lang) {
    ctx.i18n.changeLanguage(lang);
  }

  return (
    <div className="min-h-screen bg-off-white dark:bg-dark-brown text-black dark:text-light-beige">
      <div className="flex justify-end p-4 mr-[23rem]">
        <LanguageSwitcher currentLang={currentLang} />
        <ThemeSwitcher />
      </div>
      <div className="container mx-auto px-4 py-8">
        <NavigationBarWrapper />
        {children}
      </div>
    </div>
  );
}
