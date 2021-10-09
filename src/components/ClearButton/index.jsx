import "./styles.css";

const ClearButton = ({ className, ...rest }) => {
	const cn = `clear-button ${className || ""}`;

	return (
		<button type="button" className={cn} {...rest}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="none"
			>
				<path
					fill="#CCC"
					d="M8 16a8 8 0 0 1-8-8 8 8 0 0 1 8-8 8 8 0 0 1 8 8 8 8 0 0 1-8 8Zm4-10.9L10.9 4 8 6.9 5.1 4 4 5.1 6.9 8 4 10.9 5.1 12 8 9.1l2.9 2.9 1.1-1.1L9.1 8 12 5.1Z"
				/>
			</svg>
		</button>
	);
};

export default ClearButton;
