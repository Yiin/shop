import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import IndexPage from "./pages/IndexPage";
import CollectionsPage from "./pages/CollectionsPage";
import ItemsPage from "./pages/ItemsPage";

const Dashboard = () => (
    <Router basename="/dashboard">
        <div className="p-6 sm:px-20 bg-white border-b border-gray-200">
            <Navigation />

            <Switch>
                <Route exact path="/">
                    <IndexPage />
                </Route>
                <Route path="/categories">
                    <CollectionsPage />
                </Route>
                <Route path="/items">
                    <ItemsPage />
                </Route>
            </Switch>
        </div>
    </Router>
);

if (document.getElementById("dashboard-component")) {
    ReactDOM.render(
        <Dashboard />,
        document.getElementById("dashboard-component")
    );
}
