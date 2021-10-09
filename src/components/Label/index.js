import classNames from "classnames";
import "./styles.css";

const Label = ({ title, required, className, children, ...rest }) => {
	return (
		<label
			className={classNames(className, "label", required && "label__required")}
			{...rest}
		>
			<div className="label--title">{title}</div>
			{children}
		</label>
	);
};

export default Label;
