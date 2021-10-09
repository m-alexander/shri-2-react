import { Link } from "react-router-dom";
import classNames from "classnames";
import "./styles.css";

const Button = ({ variant, size, className, href, ...rest }) => {
	const cn = classNames(
		className,
		"button",
		variant && `button__${variant}`,
		size && `button__size-${size}`
	);

	if (href) {
		return <Link to={href} className={cn} {...rest} />;
	}

	return <button className={cn} type="button" {...rest} />;
};

export default Button;
