import { RequestInfo } from "rwsdk/worker";
import { Layout } from "../template/Layout";

export function Showcase({ ctx, params }: RequestInfo) {
  return (
    <Layout ctx={ctx} params={params}>
      <main className="mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-light-beige">
            {ctx.translate("showcase")}
          </h1>

          <div className="space-y-8">
            <p className="text-center text-xl mb-12 text-gray-600 dark:text-gray-300">
              A showcase of my work, achievements, and creative projects.
            </p>

            {/* Featured Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Personal Website */}
              <div className="bg-white dark:bg-dark-brown p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl mb-2">🌐</div>
                    <div className="font-bold text-lg">Personal Website</div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-light-beige">
                  Modern Portfolio
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  Responsive personal website with dark mode,
                  internationalization, and modern web technologies.
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">
                    React
                  </span>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">
                    TypeScript
                  </span>
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">
                    Tailwind
                  </span>
                </div>
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                >
                  View Project →
                </a>
              </div>

              {/* StarCraft II Career */}
              <div className="bg-white dark:bg-dark-brown p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-gradient-to-br from-green-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl mb-2">🏆</div>
                    <div className="font-bold text-lg">StarCraft II</div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-light-beige">
                  Professional Gaming
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  Professional StarCraft II player with $19,122 in tournament
                  winnings and 13+ years of competitive experience.
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">
                    Zerg
                  </span>
                  <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">
                    $19K+ Winnings
                  </span>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">
                    57.3% Win Rate
                  </span>
                </div>
                <a
                  href="https://liquipedia.net/starcraft2/ZhuGeLiang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                >
                  View Profile →
                </a>
              </div>

              {/* Weather Platform */}
              <div className="bg-white dark:bg-dark-brown p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl mb-2">🌤️</div>
                    <div className="font-bold text-lg">Weather Platform</div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-light-beige">
                  Data Visualization
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  Full-stack weather data processing platform with real-time
                  analytics and interactive dashboards.
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">
                    Python
                  </span>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">
                    React
                  </span>
                  <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded text-xs">
                    PostgreSQL
                  </span>
                </div>
                <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                  Company Project
                </span>
              </div>

              {/* E-commerce Solution */}
              <div className="bg-white dark:bg-dark-brown p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl mb-2">🛒</div>
                    <div className="font-bold text-lg">E-commerce</div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-light-beige">
                  Online Store Platform
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  Modern e-commerce solution with payment processing, inventory
                  management, and performance optimization.
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">
                    React
                  </span>
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">
                    Node.js
                  </span>
                  <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">
                    Stripe
                  </span>
                </div>
                <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                  Client Project
                </span>
              </div>
            </div>

            {/* Statistics Section */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-light-beige text-center">
                Key Achievements
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    4+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Years Software Engineering
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                    13+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Years Gaming Experience
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                    51
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Tournament Wins
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                    10+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Technologies Mastered
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Elements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Skills Showcase */}
              <div className="bg-white dark:bg-dark-brown p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-light-beige">
                  Technical Skills
                </h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600 dark:text-gray-300">
                        React/TypeScript
                      </span>
                      <span className="text-gray-900 dark:text-light-beige font-medium">
                        95%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: "95%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600 dark:text-gray-300">
                        Python/Backend
                      </span>
                      <span className="text-gray-900 dark:text-light-beige font-medium">
                        90%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-green-600 h-2 rounded-full"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600 dark:text-gray-300">
                        StarCraft II
                      </span>
                      <span className="text-gray-900 dark:text-light-beige font-medium">
                        85%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-purple-600 h-2 rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white dark:bg-dark-brown p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-light-beige">
                  Recent Activity
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900 dark:text-light-beige">
                        Personal Website Launch
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        January 2025
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900 dark:text-light-beige">
                        uThermal 2v2 Tournament
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        August 2025
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-950 rounded-lg">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900 dark:text-light-beige">
                        Weather Platform Update
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        December 2024
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-purple-50 to-green-50 dark:from-purple-950 dark:to-green-950 p-8 rounded-lg border border-purple-200 dark:border-purple-800 text-center">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-light-beige">
                Ready to Collaborate?
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Whether you're looking for a software engineer, a StarCraft II
                player, or just want to discuss interesting projects, I'm always
                open to new opportunities and collaborations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:wenlei.dai@example.com"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors font-medium"
                >
                  Get In Touch
                </a>
                <a
                  href="/public/Wenlei Resume 2025.pdf"
                  className="border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 px-8 py-3 rounded-lg transition-colors font-medium text-gray-700 dark:text-gray-300"
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
