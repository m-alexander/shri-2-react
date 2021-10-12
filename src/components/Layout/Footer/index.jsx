import { Link } from "react-router-dom";
import "./styles.css";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer--content">
				<ul className="footer--links">
					<li className="footer--links-item">
						<Link to="/support" className="footer--link">
							Support
						</Link>
					</li>
					<li className="footer--links-item">
						<Link to="/learning" className="footer--link">
							Learning
						</Link>
					</li>
					<li className="footer--links-item">
						<Link to="/ru" className="footer--link">
							Русская версия
						</Link>
					</li>
				</ul>

				<div className="footer--copyright">&copy; 2021 Александр Мамутов</div>
			</div>
		</footer>
	);
};

export default Footer;
