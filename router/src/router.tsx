import {
  Route,
  Router,
  RouterContext,
  RouterProvider
} from "@tanstack/react-router";
import { routeTree as remoteRouteTree } from "remote/routes";
import { routeTree as hostRouteTree } from "host/routes";

console.log("Hi from router!!!");

const RootComponent = () => (
  <>
    <h1>I'm the root component</h1>
  </>
);
const routerContext = new RouterContext();
const rootRoute = routerContext.createRootRoute({
  component: RootComponent
});

export const indexRoute = new Route({
  path: "/",
  getParentRoute: () => rootRoute,
  component: () => <div>Hello from index! its a route</div>
});

// const routeTree = rootRoute.addChildren([
//   indexRoute,
//   ...remoteRouteTree.children,
//   ...hostRouteTree.children
// ]);
const routeTree = rootRoute.addChildren([
  indexRoute,
  ...remoteRouteTree.children,
  // ...hostRouteTree.children
]);
console.log("route tree!", routeTree);

export const router = new Router({
  context: routerContext,
  routeTree
});
console.log("router", router);
console.log("HELLO OUT THERE!!", router);

export const ModuleRouterProvider = <RouterProvider router={router} />;
