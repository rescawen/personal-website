import { RequestInfo } from "rwsdk/worker";
import { Layout } from "../template/Layout";

export function Showcase({ ctx, params }: RequestInfo) {
  return (
    <Layout ctx={ctx} params={params}>
      <main className="mt-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">
            {ctx.translate("showcase")}
          </h1>

          <div className="prose prose-lg mx-auto dark:prose-invert">
            <p className="text-center text-xl mb-12">
              Welcome to my showcase page. Here you'll find examples of my work
              and projects.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Project 1</h3>
                <p>Description of your first showcase project goes here.</p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Project 2</h3>
                <p>Description of your second showcase project goes here.</p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Project 3</h3>
                <p>Description of your third showcase project goes here.</p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Project 4</h3>
                <p>Description of your fourth showcase project goes here.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
