export const AppRoutes = {
	MAIN: "main",
	CATALOG: "catalog",
	ABOUT: "about",
	NOT_FOUND: "not_found",
};

export const getRouteMain = () => "/";
export const getRouteCatalog = () => "/catalog";
export const getRouteAbout = () => "/about";

export const AppRouteByPathPattern = {
	[getRouteMain()]: AppRoutes.MAIN,
	[getRouteCatalog()]: AppRoutes.CATALOG,
	[getRouteAbout()]: AppRoutes.ABOUT,
};
