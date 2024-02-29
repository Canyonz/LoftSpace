import { Route, Routes } from "react-router-dom";
import { MainPage } from "./mainPage";
import { CatalogPage } from "./catalogPage";
import { ContactsPage } from "./contactsPage";

export const AppRouter = () => {
	return (
		<Routes>
			<Route element={<MainPage />} path="/" />
			<Route element={<CatalogPage />} path="/catalog" />
			<Route element={<ContactsPage />} path="/about" />
			<Route element={<ContactsPage />} path="*" />
		</Routes>
	);
};
