import { AppRoutes } from "@/shared/const/router";
import { useRouteChange } from "./useRouteChange";

export const useStylesNavbar = () => {
	const appRoute = useRouteChange();
	const variant = {
		[AppRoutes.MAIN]: "primary",
		[AppRoutes.CATALOG]: "secondary",
		[AppRoutes.ABOUT]: "secondary",
		[AppRoutes.NOT_FOUND]: "secondary",
	}[appRoute];

	return {
		variant,
	};
};
