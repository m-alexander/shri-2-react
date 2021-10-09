import HeaderButton from "components/HeaderButton";
import Layout from "components/Layout";
import { SettingsIcon, PlayIcon } from "components/Icons";
import Button from "components/Button";
import BuildItem from "./BuildItem";
import NewBuildModal from "./NewBuildModal";
import { getBuildItems, getSettings } from "api";
import "./styles.css";
import { useState } from "react";

const BuildHistory = () => {
	const settings = getSettings();
	const items = getBuildItems();

	const [isNewBuildModalOpened, setNewBuildModalOpened] = useState(false);

	return (
		<>
			<Layout
				actions={
					<>
						<HeaderButton
							icon={PlayIcon}
							label="Run build"
							onClick={() => setNewBuildModalOpened(true)}
						/>
						<HeaderButton icon={SettingsIcon} href="/settings" />
					</>
				}
				title={
					<div className="build-history--title">{settings.repository}</div>
				}
			>
				<div className="build-history--items">
					{items.map((item) => (
						<BuildItem key={item.id} item={item} />
					))}
				</div>

				<Button className="build-history--show-more-btn" size="small">
					Show more
				</Button>
			</Layout>

			{isNewBuildModalOpened && (
				<NewBuildModal onClose={() => setNewBuildModalOpened(false)} />
			)}
		</>
	);
};

export default BuildHistory;
