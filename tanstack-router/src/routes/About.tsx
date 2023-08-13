import { FileRoute } from "@tanstack/react-router";

export const route = new FileRoute('about').createRoute({
  component: () => <div>Hello from About! its a route</div>
});
