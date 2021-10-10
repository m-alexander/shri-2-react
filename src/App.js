import { BrowserRouter, Switch, Route } from "react-router-dom";

import StartPage from "pages/Start";
import SettingsPage from "pages/Settings";
import NotFoundPage from "pages/NotFound";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={StartPage} />
				<Route path="/settings" exact component={SettingsPage} />
				<Route path="*" exact component={NotFoundPage} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
