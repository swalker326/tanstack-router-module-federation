import { Route } from "@tanstack/react-router";
import { FileRoute as rootRoute } from "./Root";

export const FileRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About
});

function About() {
  return <div>Hello from About!</div>;
}
