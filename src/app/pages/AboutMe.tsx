import { RequestInfo } from "rwsdk/worker";
import { Layout } from "../template/Layout";

export function AboutMe({ ctx, params }: RequestInfo) {
  return (
    <Layout ctx={ctx} params={params}>
      <main className="mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-light-beige">
            {ctx.translate("about_me")}
          </h1> */}

          <div className="space-y-8">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                WD
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-light-beige">
                Wenlei Dai
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
                Software Engineer & StarCraft II Player
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                Helsinki, Finland
              </p>
            </div>

            {/* Professional Summary */}
            <div className="bg-white dark:bg-dark-brown p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-light-beige">
                Professional Summary
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Experienced software engineer with a strong background in
                full-stack development, specializing in React, TypeScript, and
                modern web technologies. Currently working at Vaisala as a
                Software Engineer, with previous experience at companies like
                Futurice and Reaktor. Also a professional StarCraft II player
                with over $19,000 in tournament winnings and a decade of
                competitive gaming experience. TODO rewrite
              </p>
            </div>

            {/* Key Information Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-dark-brown p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-light-beige">
                  Professional Experience
                </h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-light-beige">
                      Metaplay
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Junior Frontend Developer (2023-2024)
                    </p>
                  </div>
                  <div className="border-l-4  border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-light-beige">
                      Aiforsite
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Frontend Developer 2022
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-light-beige">
                      Loihde
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Data Developer (2021-2022)
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-dark-brown p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-light-beige">
                  StarCraft II Career
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">
                      Total Winnings
                    </span>
                    <span className="font-semibold text-green-600 dark:text-green-400">
                      $19,122
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">
                      Years Active
                    </span>
                    <span className="font-semibold text-blue-600 dark:text-blue-400">
                      2012-Present
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">
                      Race
                    </span>
                    <span className="font-semibold text-purple-600 dark:text-purple-400">
                      Zerg
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">
                      Win Rate
                    </span>
                    <span className="font-semibold text-orange-600 dark:text-orange-400">
                      57.3%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="bg-white dark:bg-dark-brown p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-light-beige">
                Technical Skills
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-light-beige">
                    Frontend
                  </h4>
                  <div className="space-y-1">
                    <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm mr-2 mb-2">
                      React
                    </span>
                    <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm mr-2 mb-2">
                      TypeScript
                    </span>
                    <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm mr-2 mb-2">
                      Vue.js
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
                    <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm mr-2 mb-2">
                      Python
                    </span>
                    <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm mr-2 mb-2">
                      PostgreSQL
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-light-beige">
                    Tools
                  </h4>
                  <div className="space-y-1">
                    <span className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-sm mr-2 mb-2">
                      Docker
                    </span>
                    <span className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-sm mr-2 mb-2">
                      AWS
                    </span>
                    <span className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-sm mr-2 mb-2">
                      Git
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-light-beige">
                Get In Touch
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                I'm always interested in new opportunities, collaborations, and
                interesting projects. Whether it's software development or
                StarCraft II, feel free to reach out!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:wenlei.dai@example.com"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors text-center font-medium"
                >
                  Email Me
                </a>
                <a
                  href="/public/Wenlei Resume 2025.pdf"
                  className="border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 px-6 py-3 rounded-lg transition-colors text-center font-medium text-gray-700 dark:text-gray-300"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
