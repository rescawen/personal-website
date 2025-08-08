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
      {/* <div className="flex justify-end p-4 mr-[23rem]"> */}
      <div className="container mx-auto sm:px-4 py-2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end gap-2 sm:gap-6 mr-0.5">
            <LanguageSwitcher currentLang={currentLang} />
            <ThemeSwitcher />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <NavigationBarWrapper />
        {children}
      </div>
    </div>
  );
}
