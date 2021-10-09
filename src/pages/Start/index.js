import { useSelector } from "react-redux";
import NotConfigured from "./NotConfigured";
import BuildHistory from "./BuildHistory";

const StartPage = () => {
	const settings = useSelector((store) => {
		return store?.settings;
	});

	const isConfigured = settings?.repository && settings?.buildCommand;

	return isConfigured ? <BuildHistory /> : <NotConfigured />;
};

export default StartPage;
