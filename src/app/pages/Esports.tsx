import { RequestInfo } from "rwsdk/worker";
import { Layout } from "../template/Layout";

export function Esports({ ctx, params }: RequestInfo) {
  return (
    <Layout ctx={ctx} params={params}>
      <main className="mt-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">
            {ctx.translate("esports")}
          </h1>

          <div className="prose prose-lg mx-auto dark:prose-invert">
            <p className="text-center text-xl mb-12">
              My journey and achievements in competitive esports.
            </p>

            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="text-2xl font-semibold mb-4">
                  Competitive Gaming
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Professional esports player with experience in multiple
                  competitive titles.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                      5+
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Years Experience
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                      50+
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Tournaments
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                      15+
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Wins
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 dark:border-gray-700 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">
                  Recent Achievements
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-yellow-50 dark:bg-yellow-950 rounded-lg border-l-4 border-yellow-400">
                    <div>
                      <h4 className="font-semibold">Championship Title 2024</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        First place in regional tournament
                      </p>
                    </div>
                    <div className="text-2xl">🏆</div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-silver-50 dark:bg-gray-900 rounded-lg border-l-4 border-gray-400">
                    <div>
                      <h4 className="font-semibold">Runner-up 2023</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Second place in national championship
                      </p>
                    </div>
                    <div className="text-2xl">🥈</div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-orange-50 dark:bg-orange-950 rounded-lg border-l-4 border-orange-400">
                    <div>
                      <h4 className="font-semibold">Top 8 Finish</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Consistent performance in major tournaments
                      </p>
                    </div>
                    <div className="text-2xl">🥉</div>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 dark:border-gray-700 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">
                  Games & Specializations
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                    <h4 className="font-semibold mb-2">Primary Games</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Competitive FPS Games</li>
                      <li>• Strategy Games</li>
                      <li>• Fighting Games</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                    <h4 className="font-semibold mb-2">Skills</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Team Leadership</li>
                      <li>• Strategic Planning</li>
                      <li>• Performance Analysis</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="text-center bg-gray-50 dark:bg-gray-900 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">
                  Looking for Opportunities
                </h3>
                <p className="mb-6">
                  Open to team collaborations, sponsorships, and coaching
                  opportunities.
                </p>
                <div className="flex justify-center gap-4">
                  <a
                    href="#"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
                  >
                    Contact Me
                  </a>
                  <a
                    href="#"
                    className="border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 px-6 py-2 rounded-lg transition-colors"
                  >
                    View Stats
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
