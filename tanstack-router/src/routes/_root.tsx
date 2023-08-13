import * as React from "react";
import { Link, Outlet, RootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const route = new RootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2 text-lg">
        <Link
          to="/"
          activeProps={{
            className: "font-bold"
          }}
          activeOptions={{ exact: true }}
        >
          Home
        </Link>{" "}
        <Link
          to={"/about"}
          activeProps={{
            className: "font-bold"
          }}
        >
          Posts
        </Link>
        <Link
          to={"/remote"}
          activeProps={{
            className: "font-bold"
          }}
        >
          remote
        </Link>

      </div>
      <hr />
      <Outlet />
      {/* Start rendering router matches */}
      <TanStackRouterDevtools position="bottom-right" />
    </>
  )
});
