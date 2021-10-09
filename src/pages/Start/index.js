import NotConfigured from "./NotConfigured";
import BuildHistory from "./BuildHistory";
import { getSettings } from "api";

const StartPage = () => {
	const settings = getSettings();
	const isConfigured = settings?.repository && settings?.buildCommand;

	return isConfigured ? <BuildHistory /> : <NotConfigured />;
};

export default StartPage;
