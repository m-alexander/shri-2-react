import { useState } from "react";
import { useSelector } from "react-redux";
import HeaderButton from "components/HeaderButton";
import Layout from "components/Layout";
import { SettingsIcon, PlayIcon } from "components/Icons";
import Button from "components/Button";
import BuildItem from "./BuildItem";
import NewBuildModal from "./NewBuildModal";
import { useBuildItems } from "./_hooks";
import "./styles.css";

const BuildHistory = () => {
	const repository = useSelector((state) => {
		return state?.settings?.repository ?? "";
	});

	const { fetching, hasMore, fetchMore, items } = useBuildItems();

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

				{hasMore && (
					<Button
						className="build-history--show-more-btn"
						size="small"
						disabled={fetching}
						onClick={fetchMore}
					>
						Show more
					</Button>
				)}
			</Layout>

			{isNewBuildModalOpened && (
				<NewBuildModal onClose={() => setNewBuildModalOpened(false)} />
			)}
		</>
	);
};

export default BuildHistory;
