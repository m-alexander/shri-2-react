import Layout from "components/Layout";
import SettingsForm from "./SettingsForm";
import "./styles.css";

const SettingsPage = () => {
	return (
		<Layout>
			<div className="settings-page">
				<div className="settings-page--header">Settings</div>
				<div className="settings-page--description">
					Configure repository connection and&nbsp;synchronization settings.
				</div>

				<SettingsForm />
			</div>
		</Layout>
	);
};

export default SettingsPage;
