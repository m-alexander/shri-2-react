import Header from "./Header";
import Footer from "./Footer";
import "./styles.css";

const Layout = ({ title, actions, children }) => {
	return (
		<div className="layout">
			<Header title={title} actions={actions} />
			<main className="layout--main">{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
