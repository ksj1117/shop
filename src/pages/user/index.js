import React from "react";
import {Redirect,Route, Switch} from "react-router-dom";
import Login from "./Login";
import Layout from "../../layout/Layout";

const User = (props) => {

    const {match} = props;

    return (
        <Layout>
            <Switch>
                <Route exact path={`${match.url}/login`} render={(props) => <Login {...props}/> }/>
            </Switch>
        </Layout>
    )
};

export default User;