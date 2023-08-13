import React from "react";
import ReactDOM from "react-dom/client";
import { Router, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { routes } from "remote/routes";
console.log("REMOTE!", routes);
const children = routeTree.children;
if (!children) {
  routeTree.addChildren([...routes]);
} else {
  routeTree.addChildren([...children, ...routes]);
}

console.log(routeTree.children);
// Set up a Router instance
const router = new Router({
  routeTree,
  defaultPreload: "intent"
});

export const ModuleRouterProvider = <RouterProvider router={router} />;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>{ModuleRouterProvider}</React.StrictMode>
);
