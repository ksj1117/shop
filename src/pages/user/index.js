import React from "react";
import {Route, Switch} from "react-router-dom";
import Login from "./Login";

const User = (props) => {

    const {match} = props;

    return (
        <Switch>
            <Route exact path={`${match.url}/login`} render={(props) => <Login {...props}/> }/>

        </Switch>
    );
};

export default User;