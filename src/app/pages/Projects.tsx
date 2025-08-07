import { RequestInfo } from "rwsdk/worker";
import { Layout } from "../template/Layout";

export function Projects({ ctx, params }: RequestInfo) {
  return (
    <Layout ctx={ctx} params={params}>
      <main className="mt-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">
            {ctx.translate("projects")}
          </h1>

          <div className="prose prose-lg mx-auto dark:prose-invert">
            <p className="text-center text-xl mb-12">
              Here are some of the projects I've worked on.
            </p>

            <div className="space-y-8">
              <div className="border border-gray-200 dark:border-gray-700 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Project Alpha</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A comprehensive web application built with modern
                  technologies.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                    React
                  </span>
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">
                    Node.js
                  </span>
                  <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
                    PostgreSQL
                  </span>
                </div>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    View Project
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>

              <div className="border border-gray-200 dark:border-gray-700 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Project Beta</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A mobile application focused on user experience and
                  performance.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                    React Native
                  </span>
                  <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm">
                    JavaScript
                  </span>
                  <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-3 py-1 rounded-full text-sm">
                    Firebase
                  </span>
                </div>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    View Project
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>

              <div className="border border-gray-200 dark:border-gray-700 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Project Gamma</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  An open-source library that helps developers build better
                  applications.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                    TypeScript
                  </span>
                  <span className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm">
                    NPM
                  </span>
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">
                    Open Source
                  </span>
                </div>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    View Project
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    GitHub
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
