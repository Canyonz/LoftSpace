export const AppRoutes = {
	MAIN: "main",
	CATALOG: "catalog",
	ABOUT: "about",
	NOT_FOUND: "not_found",
};

export const getRouteMain = () => "/";
export const getRouteCatalog = () => "/catalog";
export const getRouteCatalogId = ( id ) => `/catalog/${id}`;
export const getRouteAbout = () => "/about";
export const getRouteNotFound = () => "/not_found";

export const AppRouteByPathPattern = {
	[getRouteMain()]: AppRoutes.MAIN,
	[getRouteCatalog()]: AppRoutes.CATALOG,
	[getRouteAbout()]: AppRoutes.ABOUT,
	[getRouteNotFound()]: AppRoutes.NOT_FOUND,
};
