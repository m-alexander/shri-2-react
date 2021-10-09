const initialState = {
	settings: {
		repository: "",
		buildCommand: "npm ci && npm run build",
		mainBranch: "master",
		syncTime: "10",
	},
};

function rootReducer(state = initialState, action) {
	switch (action.type) {
		case "SET_SETTINGS":
			return {
				...state,
				settings: action.payload,
			};
		default:
			return state;
	}
}

export default rootReducer;
