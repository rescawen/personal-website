import { RequestInfo } from "rwsdk/worker";
import { Layout } from "../template/Layout";

export function AboutMe({ ctx, params }: RequestInfo) {
  return (
    <Layout ctx={ctx} params={params}>
      <main className="mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <div className="flex flex-col items-center md:flex-row md:justify-center md:items-center gap-8 sm:mb-6 sm:ml-12">
                <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src="/images/zhugeliang_aboutme.png"
                    alt="Wenlei Dai"
                    className="object-cover w-full h-full rounded-full"
                  />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-light-beige md:mb-0 mb-4">
                  Wenlei Dai
                </h2>
              </div>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
                {ctx.translate("aboutme_subtitle")}
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                {ctx.translate("aboutme_location")}
              </p>
            </div>

            {/* Professional Summary */}
            <div className="bg-white dark:bg-pure-brown p-6 rounded-lg border border-gray-200 dark:border-border-brown shadow-sm">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-light-beige">
                {ctx.translate("aboutme_professional_summary_title")}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {ctx.translate("aboutme_professional_summary_content")}
              </p>
            </div>

            {/* Key Information Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-pure-brown p-6 rounded-lg border border-gray-200 dark:border-border-brown shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-light-beige">
                  {ctx.translate("aboutme_professional_experience")}
                </h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-green-500 dark:border-green-700 pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-light-beige">
                      Metaplay
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 block md:inline">
                      Junior Frontend Developer (2023-2024)
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-400 dark:border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-light-beige">
                      Aiforsite
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Frontend Developer 2022
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-400 dark:border-purple-500 pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-light-beige">
                      Loihde
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Data Developer (2021-2022)
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-pure-brown p-6 rounded-lg border border-gray-200 dark:border-border-brown shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-light-beige">
                  {ctx.translate("aboutme_starcraft_career")}
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">
                      {ctx.translate("aboutme_starcraft_years_active_title")}
                    </span>
                    <span className="font-semibold text-blue-600 dark:text-blue-400">
                      {ctx.translate("aboutme_starcraft_years_active_content")}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">
                      {ctx.translate("aboutme_starcraft_race")}
                    </span>
                    <span className="font-semibold text-purple-600 dark:text-purple-400">
                      Zerg
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">
                      {ctx.translate("aboutme_starcraft_lan_wins")}
                    </span>
                    <span className="font-semibold text-orange-600 dark:text-orange-400">
                      8
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">
                      {ctx.translate("aboutme_starcraft_earnings")}
                    </span>
                    <span className="font-semibold text-green-600 dark:text-green-500">
                      $19,122
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="bg-white dark:bg-pure-brown p-6 rounded-lg border border-gray-200 dark:border-border-brown shadow-sm">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-light-beige">
                {ctx.translate("aboutme_technical_skills_title")}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-[45%_27.5%_27.5%] gap-4">
                <div>
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-light-beige">
                    Frontend
                  </h4>
                  <div className="space-y-1">
                    <span className="inline-block bg-cyan-100 dark:bg-cyan-600 text-blue-800 dark:text-blue-100 px-2 py-1 rounded text-sm mr-2 mb-2">
                      React
                    </span>
                    <span className="inline-block bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm mr-2 mb-2">
                      TypeScript
                    </span>
                    <span className="inline-block bg-gradient-to-r from-blue-200 to-purple-200 dark:from-blue-950 dark:to-purple-950 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm mr-2 mb-2">
                      Vite
                    </span>
                    <span className="inline-block bg-green-300 dark:bg-green-600 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm mr-2 mb-2">
                      Vue.js
                    </span>
                    <span className="inline-block bg-cyan-100 dark:bg-cyan-500 text-blue-800 dark:text-blue-100 px-2 py-1 rounded text-sm mr-2 mb-2">
                      Tailwind
                    </span>
                    <span className="inline-block bg-green-300 dark:bg-green-700 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm mr-2 mb-2">
                      Playwright
                    </span>
                    <span className="inline-block bg-teal-400 dark:bg-teal-600 text-teal-800 dark:text-teal-100 px-2 py-1 rounded text-sm mr-2 mb-2">
                      i18next
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-light-beige">
                    Backend
                  </h4>
                  <div className="space-y-1">
                    <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm mr-2 mb-2">
                      Node.js
                    </span>
                    <span className="inline-block bg-cyan-300 dark:bg-cyan-800 text-cyan-800 dark:text-cyan-200 px-2 py-1 rounded text-sm mr-2 mb-2">
                      Python
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-light-beige">
                    {ctx.translate("aboutme_technical_skills_tools")}
                  </h4>
                  <div className="space-y-1">
                    <span className="inline-block bg-orange-100 dark:bg-orange-800 text-orange-800 dark:text-orange-200 px-2 py-1 rounded text-sm mr-2 mb-2">
                      Git
                    </span>
                    <span className="inline-block bg-neutral-300 dark:bg-neutral-800 dark:text-neutral-200 px-2 py-1 rounded text-sm mr-2 mb-2">
                      OBS
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-light-beige">
                {ctx.translate("aboutme_get_in_touch_title")}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {ctx.translate("aboutme_get_in_touch_content")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:resca.wen@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg transition-colors text-center font-medium"
                >
                  {ctx.translate("aboutme_get_in_touch_email_me")}
                </a>
                <a
                  href="/documents/Wenlei_Resume_2025.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 px-5 py-3 rounded-lg transition-colors text-center font-medium text-gray-700 dark:text-gray-300"
                >
                  {ctx.translate("aboutme_get_in_touch_download_cv")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
