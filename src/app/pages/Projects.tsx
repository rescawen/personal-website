import { RequestInfo } from "rwsdk/worker";
import { Layout } from "../template/Layout";

export function Projects({ ctx, params }: RequestInfo) {
  return (
    <Layout ctx={ctx} params={params}>
      <main className="mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-light-beige">
            {ctx.translate("projects")}
          </h1>

          <div className="space-y-8">
            <p className="text-center text-xl mb-12 text-gray-600 dark:text-gray-300">
              A collection of my software development projects and
              contributions.
            </p>

            {/* Personal Website */}
            <div className="bg-white dark:bg-dark-brown p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-light-beige">
                    Personal Website
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    A modern, responsive personal website built with React,
                    TypeScript, and Tailwind CSS. Features dark mode support,
                    internationalization (English/Finnish), and optimized for
                    performance. Deployed on Cloudflare Workers for global CDN
                    distribution.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                      React
                    </span>
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                      TypeScript
                    </span>
                    <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">
                      Tailwind CSS
                    </span>
                    <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
                      Cloudflare Workers
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                    >
                      View Live
                    </a>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:underline font-medium"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
                <div className="w-full md:w-48 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                  Portfolio
                </div>
              </div>
            </div>

            {/* Weather Data Platform */}
            <div className="bg-white dark:bg-dark-brown p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-light-beige">
                    Weather Data Platform
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    Full-stack weather data processing and visualization
                    platform at Vaisala. Built scalable microservices
                    architecture handling real-time meteorological data,
                    implemented data pipelines, and created interactive
                    dashboards for weather analytics.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">
                      Python
                    </span>
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                      React
                    </span>
                    <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm">
                      PostgreSQL
                    </span>
                    <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-3 py-1 rounded-full text-sm">
                      Docker
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-gray-500 dark:text-gray-400 font-medium">
                      Company Project
                    </span>
                  </div>
                </div>
                <div className="w-full md:w-48 h-32 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                  Vaisala
                </div>
              </div>
            </div>

            {/* E-commerce Platform */}
            <div className="bg-white dark:bg-dark-brown p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-light-beige">
                    E-commerce Platform
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    Modern e-commerce solution developed at Futurice with React,
                    Node.js, and MongoDB. Implemented payment processing,
                    inventory management, and responsive design. Achieved 40%
                    performance improvement through optimization and caching
                    strategies.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                      React
                    </span>
                    <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">
                      Node.js
                    </span>
                    <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm">
                      MongoDB
                    </span>
                    <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
                      Stripe API
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-gray-500 dark:text-gray-400 font-medium">
                      Client Project
                    </span>
                  </div>
                </div>
                <div className="w-full md:w-48 h-32 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                  Futurice
                </div>
              </div>
            </div>

            {/* Financial Analytics Dashboard */}
            <div className="bg-white dark:bg-dark-brown p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-light-beige">
                    Financial Analytics Dashboard
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    Real-time financial data visualization platform built at
                    Reaktor. Created interactive charts, real-time data
                    streaming, and comprehensive reporting tools. Integrated
                    with multiple financial APIs and databases.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                      TypeScript
                    </span>
                    <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">
                      D3.js
                    </span>
                    <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm">
                      WebSocket
                    </span>
                    <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-3 py-1 rounded-full text-sm">
                      Redis
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-gray-500 dark:text-gray-400 font-medium">
                      Client Project
                    </span>
                  </div>
                </div>
                <div className="w-full md:w-48 h-32 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                  Reaktor
                </div>
              </div>
            </div>

            {/* Open Source Contributions */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-950 dark:to-blue-950 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-light-beige">
                Open Source Contributions
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Active contributor to various open-source projects and
                libraries.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-dark-brown p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-light-beige">
                    React Libraries
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    Contributing to popular React component libraries and
                    utilities.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">
                      React Hook Form
                    </span>
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">
                      Framer Motion
                    </span>
                  </div>
                </div>
                <div className="bg-white dark:bg-dark-brown p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-light-beige">
                    Developer Tools
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    Building and maintaining developer productivity tools.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">
                      ESLint Plugins
                    </span>
                    <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">
                      VSCode Extensions
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-light-beige">
                Let's Build Something Together
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                I'm always interested in new projects, collaborations, and
                interesting technical challenges. Whether it's a startup idea,
                open-source contribution, or consulting work, I'd love to hear
                about it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:wenlei.dai@example.com"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors text-center font-medium"
                >
                  Get In Touch
                </a>
                <a
                  href="#"
                  className="border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 px-6 py-3 rounded-lg transition-colors text-center font-medium text-gray-700 dark:text-gray-300"
                >
                  View GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
