import { route as rootRoute } from './routes/_root'
import { route as indexRoute } from './routes/index'
import { route as aboutRoute } from './routes/about'

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      parentRoute: typeof rootRoute
    }
    'about': {
      parentRoute: typeof rootRoute
    }  
  }
}

Object.assign(indexRoute.options, {
  path: '/',
  getParentRoute: () => rootRoute,
})
Object.assign(aboutRoute.options, {
  path: 'about',
  getParentRoute: () => rootRoute,
})

export const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute
])