import { route as rootRoute } from "./routes/_root";

import { route as remoteindexRoute } from "./routes/remote.index";

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "remote/": {
      parentRoute: typeof rootRoute;
    };
  }
}

Object.assign(remoteindexRoute.options, {
  path: "remote/",
  getParentRoute: () => rootRoute
});

export const routeTree = rootRoute.addChildren([remoteindexRoute]);
export const routes = routeTree.children;
