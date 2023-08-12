import { Route } from "@tanstack/react-router";
import { FileRoute as rootRoute } from "./Root";
import { App } from "remote/App";

// Create an index route
export const FileRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Index
});

export function Index() {
  return (
    <div>
      <h3>Welcome Home!</h3>
      <App />
    </div>
  );
}
