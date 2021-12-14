import React from "react";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Landing from "./pages/landing/index";
import User from "./pages/user";
import Shop from "./pages/shop";
import Question from "./pages/Question";
import Info from "./pages/info";


const Routing = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={(props) => <Landing {...props} />} />
                <Route path={"/shop"} component={(props) => <Shop {...props}/> } />
                <Route path={"/info"} component={(props) => <Info {...props}/> } />
                <Route path={"/question"} component={(props) => <Question {...props}/> } />
                <Route path={"/user"} component={(props) => <User {...props}/> } />
                <Redirect to={"/"}/>
            </Switch>
        </Router>
    );
};

export default Routing;