import { Outlet, RouterProvider } from "@tanstack/react-router";
import React from "react";
import ReactDOM from "react-dom/client";
import { ModuleRouterProvider, router } from "router/router";

console.log("Hello from main.tsx!");
console.log("ModuleRouterProvider", ModuleRouterProvider);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <div>Hello from main.tsx!</div>
    <Outlet />
  </React.StrictMode>
);
