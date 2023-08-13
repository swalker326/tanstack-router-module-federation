import { FileRoute } from "@tanstack/react-router";

export const route = new FileRoute('/').createRoute({
  component: () => (
    <div>
      <h3>Welcome Home!</h3>
    </div>
  )
});
