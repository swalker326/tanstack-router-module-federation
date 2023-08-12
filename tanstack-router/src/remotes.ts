declare module "remote/App" {
  import {
    RouteComponent,
    RouteContext,
    RouteProps
  } from "@tanstack/react-router";
  type FileRouteType = {
    path: string;
    component: RouteComponent<
      RouteProps<
        unknown,
        object,
        Record<never, string>,
        RouteContext,
        RouteContext
      >
    >;
  };
  let FileRoute: FileRouteType;
}
