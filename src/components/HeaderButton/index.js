import classNames from "classnames";
import Button from "components/Button";
import "./styles.css";

const HeaderButton = ({ icon: Icon, label, className, ...rest }) => {
	return (
		<Button
			className={classNames("header-button", className)}
			size="small"
			{...rest}
		>
			<Icon className="header-button--icon" />
			{label && <div className="header-button--label">{label}</div>}
		</Button>
	);
};

export default HeaderButton;
