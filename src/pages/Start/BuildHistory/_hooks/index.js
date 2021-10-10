import { useEffect, useState } from "react";
import { builds } from "./mocks";

const ITEMS_PER_PAGE = 5;

export const useBuildItems = () => {
	const [page, setPage] = useState(1);
	const [items, setItems] = useState([]);
	const [fetching, setFetching] = useState(true);

	useEffect(() => {
		fetchPage(1).then((items) => setItems(items));
	}, []);

	const fetchPage = (page) => {
		return new Promise((resolve) => {
			setFetching(true);
			setTimeout(() => {
				setFetching(false);
				const items = builds.slice(
					(page - 1) * ITEMS_PER_PAGE,
					page * ITEMS_PER_PAGE
				);
				resolve(items);
			}, Math.random() * 100 + 300);
		});
	};

	const fetchMore = () => {
		if (fetching) return;

		const nextPage = page + 1;
		setPage(nextPage);
		fetchPage(nextPage).then((items) => {
			setItems((prev) => [...prev, ...items]);
		});
	};

	return {
		fetching,
		hasMore: items.length < builds.length,
		fetchMore,
		items,
	};
};
