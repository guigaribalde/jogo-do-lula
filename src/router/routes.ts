import { lazy } from "react";

interface Route {
	path: string;
	element: React.LazyExoticComponent<({}: any) => JSX.Element>;
}

const Routes: Route[] = [
	{
		path: "/",
		element: lazy(() => import("@pages/HomePage")),
	},
	{
		path: "/game",
		element: lazy(() => import("@pages/Game")),
	},
];

export default Routes;
