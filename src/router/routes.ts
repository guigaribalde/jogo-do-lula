import { lazy } from 'react';

interface Route {
  path: string;
  element: React.LazyExoticComponent<({}: any) => JSX.Element>; //eslint-disable-line
}

const Routes: Route[] = [
  {
    path: '/',
    element: lazy(() => {
      return import('@pages/HomePage');
    }),
  },
  {
    path: '/game',
    element: lazy(() => {
      return import('@pages/Game');
    }),
  },
];

export default Routes;
