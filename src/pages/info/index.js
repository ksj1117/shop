import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import Notice from "./Notice";
import Layout from "../../layout/Layout";
import Return from "./Return";


const Info = (props) => {
    const {match} = props;

    return (
        <Layout>
            <Switch>
                <Route exact path={`${match.url}/notice`} render={(props) => <Notice {...props}/> }/>
                <Route exact path={`${match.url}/Return`} render={(props) => <Return {...props}/> }/>
                <Redirect to={`${match.url}/notice`}/>
            </Switch>
        </Layout>
    )
};

export default Info;