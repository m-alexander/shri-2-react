import { forwardRef } from "react";
import classNames from "classnames";
import "./styles.css";

const Input = forwardRef((props, ref) => {
	const { label, end, className, controlClassName, ...rest } = props;
	return (
		<div className={classNames(className, "input")}>
			<input
				className={classNames("input--control", controlClassName)}
				type="text"
				{...rest}
				ref={ref}
			/>
			{end}
		</div>
	);
});

export default Input;
