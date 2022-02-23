import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./containers/Header";
import PhoneListContainer from "./containers/PhoneListContainer";
import PhoneDetails from "./containers/PhoneDetailComponent";

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Switch>
                    <Route path="/" exact component={PhoneListContainer} />
                    <Route path="/phone/:id" exact component={PhoneDetails} />
                    <Route>404 Not Found!</Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
