import "./App.css";
import NewBankHomePage from "./Components/NewBankHomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTransaction from "./Components/AddTransaction";
import { Route, Switch, HashRouter } from "react-router-dom";
import Login from "./Components/Login";
import AccountDetails from "./Components/AccountDetails";

function App() {
	localStorage.clear();
	return (
		<HashRouter>
			<Switch>
				<Route exact path="/" render={(props) => <Login {...props} />} />
				<Route exact path="/home" render={(props) => <NewBankHomePage {...props} />} />
				<Route exact path="/AddTransaction" render={(props) => <AddTransaction {...props} />} />
				<Route exact path="/accountDetails" render={(props) => <AccountDetails {...props} />} />
			</Switch>
		</HashRouter>
	);
}

export default App;
