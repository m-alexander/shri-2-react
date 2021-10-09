import { builds } from "./mocks";

export const getBuildItems = () => {
	return builds;
};

let settings;
export const getSettings = () => {
	return settings;
};

export const saveSettings = (values) => {
	settings = values;
};
