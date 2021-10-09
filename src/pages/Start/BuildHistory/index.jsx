import { useState } from "react";
import { useSelector } from "react-redux";
import HeaderButton from "components/HeaderButton";
import Layout from "components/Layout";
import { SettingsIcon, PlayIcon } from "components/Icons";
import Button from "components/Button";
import BuildItem from "./BuildItem";
import NewBuildModal from "./NewBuildModal";
import { getBuildItems } from "api";
import "./styles.css";

const BuildHistory = () => {
	const repository = useSelector((store) => {
		return store?.settings?.repository ?? "";
	});

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
				title={<div className="build-history--title">{repository}</div>}
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
