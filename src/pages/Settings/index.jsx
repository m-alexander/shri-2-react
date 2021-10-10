import { useDispatch, useSelector } from "react-redux";
import Layout from "components/Layout";
import SettingsForm from "./SettingsForm";
import { saveSettings } from "store/actions";
import "./styles.css";

const SettingsPage = () => {
	const settings = useSelector((state) => {
		return state?.settings;
	});

	const dispatch = useDispatch();
	const handleSaveSettings = (values) => {
		dispatch(saveSettings(values));
	};

	return (
		<Layout>
			<div className="settings-page">
				<div className="settings-page--header">Settings</div>
				<div className="settings-page--description">
					Configure repository connection and&nbsp;synchronization settings.
				</div>

				<SettingsForm
					defaultValues={settings}
					onSaveSettings={handleSaveSettings}
				/>
			</div>
		</Layout>
	);
};

export default SettingsPage;
