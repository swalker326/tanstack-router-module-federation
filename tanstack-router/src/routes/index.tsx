import { Route, Router } from "@tanstack/react-router";
import { FileRoute as aboutRoute } from "./About";
import { FileRoute as rootRoute } from "./Root";
import { FileRoute as indexRoute } from "./IndexRoute";
import { FileRoute as RemoteRoute } from "remote/App";
// would be really cool if we could do something like this:
// import * as routes from '../routes/*'

const remoteRoute = new Route({
  getParentRoute: () => rootRoute,
  path: RemoteRoute.path,
  component: RemoteRoute.component
});

const routes = [indexRoute, aboutRoute, remoteRoute];

// Create the route tree using your routes
const routeTree = rootRoute.addChildren(routes);

// Create the router using your route tree
export const router = new Router({ routeTree });

// Register your router for maximum type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default { routes: remoteRoute, aboutRoute, rootRoute, indexRoute };