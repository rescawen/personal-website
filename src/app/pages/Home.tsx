import { RequestInfo } from "rwsdk/worker";
import NavigationBar from "../template/NavigationBar";

export function Home({ ctx }: RequestInfo) {
  return (
    <div className="bg-off-white dark:bg-dark-brown dark:text-light-beige h-screen overflow-hidden">
      <NavigationBar />
    </div>
  );
}
