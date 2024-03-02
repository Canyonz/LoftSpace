import { Route, Routes } from "react-router-dom";
import { MainPage } from "./mainPage";
import { CatalogPage } from "./catalogPage";
import { ContactsPage } from "./contactsPage";
import { NotFoundPage } from "./notFoundPage";
import { getRouteAbout, getRouteCatalog, getRouteMain } from "@/shared/const/router";

export const AppRouter = () => {
	return (
		<Routes>
			<Route element={<MainPage />} path={getRouteMain()} />
			<Route element={<CatalogPage />} path={getRouteCatalog()} />
			<Route element={<ContactsPage />} path={getRouteAbout()} />
			<Route element={<NotFoundPage />} path="*" />
		</Routes>
	);
};
