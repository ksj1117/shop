import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import Layout from "../../layout/Layout";
import List from "./question";

const Question = (props) => {

    const {match} = props;

    return (
        <Layout>
            <Switch>
                <Route exact path={`${match.url}/list`} render={(props) => <List {...props}/> }/>
                <Redirect to={`${match.url}/list`}/>
            </Switch>
        </Layout>
    )
};

export default Question;