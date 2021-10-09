import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import StartPage from "pages/Start";
import SettingsPage from "pages/Settings";

import store from "store";

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={StartPage} />
					<Route path="/settings" exact component={SettingsPage} />
					<Route path="/build-history" exact component={SettingsPage} />
				</Switch>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
