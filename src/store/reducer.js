const initialState = {
	settings: {
		repository: "",
		buildCommand: "npm ci && npm run build",
		mainBranch: "master",
		syncTime: "10",
	},

	buildsHistory: {
		page: 1,
		items: [],
		loading: false,
		hasMore: false,
	},
};

function rootReducer(state = initialState, action) {
	switch (action.type) {
		case "SET_SETTINGS":
			return {
				...state,
				settings: action.payload,
			};

		case "SET_BUILDS_HISTORY_PAGE":
			return {
				...state,
				buildsHistory: {
					...state.buildsHistory,
					page: action.payload,
				},
			};

		case "SET_BUILDS_HISTORY_ITEMS":
			return {
				...state,
				buildsHistory: {
					...state.buildsHistory,
					items: action.payload,
				},
			};

		case "SET_BUILDS_HISTORY_LOADING":
			return {
				...state,
				buildsHistory: {
					...state.buildsHistory,
					loading: action.payload,
				},
			};

		case "SET_BUILDS_HISTORY_HAS_MORE":
			return {
				...state,
				buildsHistory: {
					...state.buildsHistory,
					hasMore: action.payload,
				},
			};

		default:
			return state;
	}
}

export default rootReducer;
