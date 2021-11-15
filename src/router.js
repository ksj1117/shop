import React from "react";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";

import Landing from "./pages/landing";
import User from "./pages/user";
import Shop from "./pages/shop";
import Question from "./pages/Question/question";


const Routing = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={(props) => <Landing {...props} />} />
                <Route path={"/user"} component={(props) => <User {...props}/> } />
                <Route path={"/shop"} component={(props) => <Shop {...props}/> } />
                <Route path={"/question"} component={(props) => <Question {...props}/> } />
            </Switch>
        </Router>
    );
};

export default Routing;