import { Link, Outlet, RootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const FileRoute = new RootRoute({
  component: Root
});

export function Root() {
  return (
    <>
      <div>
        <Link to="/">Home</Link> <Link to="/about">About</Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
}
