import { SuccessIcon, FailedIcon, PendingIcon } from "components/Icons";
import "./styles.css";

const StatusIcon = ({ status }) => {
	if (status === "success") return <SuccessIcon className="status-icon" />;
	if (status === "failed") return <FailedIcon className="status-icon" />;
	if (status === "pending") return <PendingIcon className="status-icon" />;
	return null;
};

export default StatusIcon;
