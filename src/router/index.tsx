import { Suspense } from "react";
import { Routes as AppRouter, Route } from "react-router-dom";

import routes from "./routes";

export default function Router() {
	return (
		<AppRouter>
			{routes.map((route, index) => {
				return (
					<Route
						key={index}
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
