import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadBuildHistory, loadMoreBuildHistory } from "store/actions";

export const useBuildItems = () => {
	const {
		loading: fetching,
		hasMore,
		items,
	} = useSelector((state) => {
		return state?.buildsHistory;
	});

	const dispatch = useDispatch();

	const fetchMore = () => {
		dispatch(loadMoreBuildHistory());
	};

	useEffect(() => {
		dispatch(loadBuildHistory());
	}, []);

	return {
		fetching,
		hasMore,
		items,
		fetchMore,
	};
};
