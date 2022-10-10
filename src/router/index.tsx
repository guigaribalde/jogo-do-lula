import { Suspense } from 'react';
import { Route, Routes as AppRouter } from 'react-router-dom';

import routes from './routes';

export default function Router() {
  return (
    <AppRouter>
      {routes.map((route) => {
        return (
          <Route
            key={route.path}
            path={route.path}
            element={
              <Suspense fallback={null}>
                <route.element />
              </Suspense>
            }
          />
        );
      })}
    </AppRouter>
  );
}
