import React from "react";
import {Redirect,Route, Switch} from "react-router-dom";
import Layout from "../../layout/Layout";
import Login from "./Login";
import MyPage from "./Mypage";

const User = (props) => {

    const {match} = props;

    return (
        <Layout>
            <Switch>
                <Route exact path={`${match.url}/login`} render={(props) => <Login {...props}/> }/>
                <Route exact path={`${match.url}/mypage`} render={(props) => <MyPage {...props}/> }/>
            </Switch>
        </Layout>
    )
};

export default User;