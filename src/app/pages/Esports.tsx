import { RequestInfo } from "rwsdk/worker";
import { Layout } from "../template/Layout";

export function Esports({ ctx, params }: RequestInfo) {
  return (
    <Layout ctx={ctx} params={params}>
      <main className="mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-light-beige">
            {ctx.translate("esports")}
          </h1>

          <div className="space-y-8">
            {/* Hero Section */}
            <div className="text-center mb-8">
              <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-green-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                ZG
              </div>
              <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-light-beige">
                ZhuGeLiang (戴文磊)
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Professional StarCraft II Zerg Player
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Finland • Active since 2012
              </p>
            </div>

            {/* Career Stats */}
            <div className="bg-gradient-to-r from-green-50 to-purple-50 dark:from-green-950 dark:to-purple-950 p-6 rounded-lg border border-green-200 dark:border-green-800">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-light-beige">
                Career Statistics
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                    $19,122
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Total Winnings
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    57.3%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Win Rate
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                    935-700
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Match Record
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">
                    13+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Years Active
                  </div>
                </div>
              </div>
            </div>

            {/* Matchup Statistics */}
            <div className="bg-white dark:bg-dark-brown p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-light-beige">
                Matchup Statistics (as Zerg)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                    vs Protoss
                  </div>
                  <div className="text-lg font-semibold text-gray-900 dark:text-light-beige">
                    304-243 (55.6%)
                  </div>
                </div>
                <div className="text-center p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                  <div className="text-2xl font-bold text-red-600 dark:text-red-400 mb-1">
                    vs Terran
                  </div>
                  <div className="text-lg font-semibold text-gray-900 dark:text-light-beige">
                    277-151 (64.7%)
                  </div>
                </div>
                <div className="text-center p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">
                    vs Zerg
                  </div>
                  <div className="text-lg font-semibold text-gray-900 dark:text-light-beige">
                    342-298 (53.4%)
                  </div>
                </div>
              </div>
            </div>

            {/* Notable Achievements */}
            <div className="bg-white dark:bg-dark-brown p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-light-beige">
                Notable Achievements
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-yellow-50 dark:bg-yellow-950 rounded-lg border-l-4 border-yellow-400">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-light-beige">
                      51 Tournament Wins
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Including 16 B-Tier and 35 C-Tier victories
                    </p>
                  </div>
                  <div className="text-2xl">🏆</div>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border-l-4 border-gray-400">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-light-beige">
                      41 Runner-up Finishes
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Consistent top-tier performance across tournaments
                    </p>
                  </div>
                  <div className="text-2xl">🥈</div>
                </div>
                <div className="flex items-center justify-between p-4 bg-orange-50 dark:bg-orange-950 rounded-lg border-l-4 border-orange-400">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-light-beige">
                      13 Semi-Final Appearances
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Including 1 A-Tier tournament semi-final
                    </p>
                  </div>
                  <div className="text-2xl">🥉</div>
                </div>
              </div>
            </div>

            {/* Team History */}
            <div className="bg-white dark:bg-dark-brown p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-light-beige">
                Team History
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-light-beige">
                      KOVA Esports
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      2019-2022
                    </p>
                  </div>
                  <span className="text-blue-600 dark:text-blue-400 font-medium">
                    3+ years
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-light-beige">
                      Team Menace.fi
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      2013-2017
                    </p>
                  </div>
                  <span className="text-green-600 dark:text-green-400 font-medium">
                    4+ years
                  </span>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white dark:bg-dark-brown p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-light-beige">
                Recent Activity
              </h3>
              <div className="space-y-3">
                <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg border-l-4 border-purple-400">
                  <h4 className="font-semibold text-gray-900 dark:text-light-beige">
                    uThermal 2v2 Main Event
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    August 8, 2025 - Upcoming matches
                  </p>
                  <p className="text-sm text-purple-600 dark:text-purple-400">
                    Partnering with goblin and Shameless
                  </p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg border-l-4 border-green-400">
                  <h4 className="font-semibold text-gray-900 dark:text-light-beige">
                    2025 Earnings
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    $175 earned so far this year
                  </p>
                  <p className="text-sm text-green-600 dark:text-green-400">
                    Active in current tournaments
                  </p>
                </div>
              </div>
            </div>

            {/* Contact & Links */}
            <div className="bg-gradient-to-r from-purple-50 to-green-50 dark:from-purple-950 dark:to-green-950 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-light-beige">
                Follow My Journey
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Stay updated with my latest matches, tournament results, and
                StarCraft II content.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://liquipedia.net/starcraft2/ZhuGeLiang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors text-center font-medium"
                >
                  Liquipedia Profile
                </a>
                <a
                  href="#"
                  className="border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 px-6 py-3 rounded-lg transition-colors text-center font-medium text-gray-700 dark:text-gray-300"
                >
                  Match VODs
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
