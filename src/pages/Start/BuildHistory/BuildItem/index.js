import classNames from "classnames";
import StatusIcon from "./StatusIcon";
import {
	CalendarIcon,
	CodeCommitIcon,
	StopWatchIcon,
	UserIcon,
} from "components/Icons";
import "./styles.css";

const BuildItem = ({ item }) => {
	return (
		<div
			className={classNames("build-item", `build-item__status-${item.status}`)}
		>
			<div className="build-item--status">
				<StatusIcon status={item.status} />
			</div>

			<div className="build-item--first-row">
				<div className="build-item--id">#{item.id}</div>
				<div className="build-item--message">{item.message}</div>
			</div>

			<div className="build-item--second-row">
				<div className="build-item--dest">
					<CodeCommitIcon width="16" />
					<span>{item.branch}</span>
					<span className="build-item--dest-commit">{item.commit}</span>
				</div>

				<div className="build-item--author">
					<UserIcon width="16" />
					<span>{item.author}</span>
				</div>
			</div>

			<div className="build-item--third-row">
				<div className="build-item--date">
					<CalendarIcon width="16" />
					{item.date}
				</div>

				<div className="build-item--time">
					<StopWatchIcon width="16" />
					{item.buildTime}
				</div>
			</div>
		</div>
	);
};

export default BuildItem;
