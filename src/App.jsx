import { Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import StartPage from "pages/Start";
import SettingsPage from "pages/Settings";
import NotFound from "pages/NotFound";

import store from "store";

function App() {
	return (
		<Provider store={store}>
			<Switch>
				<Route path="/" exact component={StartPage} />
				<Route path="/settings" exact component={SettingsPage} />
				<Route path="*" component={NotFound} />
			</Switch>
		</Provider>
	);
}

export default App;
