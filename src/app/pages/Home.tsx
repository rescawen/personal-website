import { RequestInfo } from "rwsdk/worker";

export function Home({ ctx }: RequestInfo) {
  return (
    <div className="bg-off-white h-screen overflow-hidden">
      <nav className="mt-16 flex flex-col items-center">
        <ul className="flex justify-center items-center space-x-16">
          <li>
            <a
              href="/"
              className="font-semibold text-lg hover:underline underline-offset-4"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/projects"
              className="font-semibold text-lg hover:underline underline-offset-4"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="/esports"
              className="font-semibold text-lg hover:underline underline-offset-4"
            >
              Esports
            </a>
          </li>
          <li>
            <a
              href="/aboutme"
              className="font-semibold text-lg hover:underline underline-offset-4"
            >
              About Me
            </a>
          </li>
          {/* <LanguageSwitcher currentLang={currentLang} /> */}
        </ul>
        <div className="relative mt-4 w-[34rem] mx-auto flex justify-center">
          {/* Horizontal line */}
          <div className="h-0.5 bg-black w-full"></div>
          {/* Left vertical line */}
          <div className="absolute left-0 top-0 h-6 w-0.5 bg-black"></div>
          {/* Right vertical line */}
          <div className="absolute right-0 top-0 h-6 w-0.5 bg-black"></div>
        </div>
      </nav>
    </div>
  );
}
