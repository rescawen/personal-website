import { RequestInfo } from "rwsdk/worker";
import { Layout } from "../template/Layout";

export function Home({ ctx, params }: RequestInfo) {
  return (
    <Layout ctx={ctx} params={params}>
      <main className="mt-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">
            {ctx.translate("about_me")}
          </h1>
          <div className="prose prose-lg mx-auto dark:prose-invert">
            <p className="text-center text-xl mb-12">
              Welcome to my personal website.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
