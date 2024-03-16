import { useEffect, useState } from "react";
import { $api } from "@/shared/api/api";

export const useGetCatalog = (props) => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState("");

	useEffect(() => {
		$api
			.get("/products/", {
				params: props,
			})
			.then((res) => {
				setProducts(res.data);
				setIsLoading(false);
			})
			.catch((e) => {
				setError(e);
			});
	}, [props]);

	return {
		products,
		isLoading,
		error,
	};
};
