import { AppRouteByPathPattern, AppRoutes } from "@/shared/const/router";
import { useLayoutEffect, useState } from "react";
import { matchPath, useLocation } from "react-router-dom";

export function useRouteChange() {
	const location = useLocation();
	const [appRoute, setAppRoute] = useState(AppRoutes.NOT_FOUND);

	useLayoutEffect(() => {
		Object.entries(AppRouteByPathPattern).forEach(([pattern, route]) => {
			if (matchPath(pattern, location.pathname)) {
				setAppRoute(route);
			}
		});
	}, [location.pathname]);

	return appRoute;
}
