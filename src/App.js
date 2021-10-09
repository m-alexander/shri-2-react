import { BrowserRouter, Switch, Route } from "react-router-dom";

import StartPage from "./pages/Start";
import SettingsPage from "./pages/Settings";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={StartPage} />
				<Route path="/settings" exact component={SettingsPage} />
				<Route path="/build-history" exact component={SettingsPage} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
