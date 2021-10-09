import "./styles.css";

const Header = ({ actions, title = "School CI server" }) => {
	return (
		<header className="header">
			<div className="header--content">
				<div className="header--title">{title}</div>
				<div className="header--actions">{actions}</div>
			</div>
		</header>
	);
};

export default Header;
