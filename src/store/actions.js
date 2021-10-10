import { buildsHistory } from "mocks/builds-history";

export const saveSettings = (values) => ({
	type: "SET_SETTINGS",
	payload: values,
});

export const setBuildHistoryItems = (items) => ({
	type: "SET_BUILDS_HISTORY_ITEMS",
	payload: items,
});

export const setBuildHistoryPage = (page) => ({
	type: "SET_BUILDS_HISTORY_PAGE",
	payload: page,
});

export const setBuildHistoryLoading = (status) => ({
	type: "SET_BUILDS_HISTORY_LOADING",
	payload: status,
});

export const setBuildHistoryHasMore = (status) => ({
	type: "SET_BUILDS_HISTORY_HAS_MORE",
	payload: status,
});

const ITEMS_PER_PAGE = 5;

export const loadBuildHistory = () => (dispatch) => {
	dispatch(setBuildHistoryLoading(true));
	dispatch(setBuildHistoryPage(1));
	dispatch(setBuildHistoryItems(buildsHistory.slice(0, ITEMS_PER_PAGE)));
	dispatch(setBuildHistoryHasMore(ITEMS_PER_PAGE < buildsHistory.length));
	dispatch(setBuildHistoryLoading(false));
};

export const loadMoreBuildHistory = () => (dispatch, getState) => {
	const newPage = (getState()?.buildsHistory?.page ?? 0) + 1;
	const prevItems = getState()?.buildsHistory?.items ?? [];

	dispatch(setBuildHistoryLoading(true));
	setTimeout(() => {
		const items = buildsHistory.slice(
			(newPage - 1) * ITEMS_PER_PAGE,
			newPage * ITEMS_PER_PAGE
		);
		const newList = [...prevItems, ...items];
		dispatch(setBuildHistoryPage(newPage));
		dispatch(setBuildHistoryItems(newList));
		dispatch(setBuildHistoryHasMore(newList.length < buildsHistory.length));
		dispatch(setBuildHistoryLoading(false));
	}, Math.random() * 100 + 300);
};
