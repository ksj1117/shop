import React from "react";
import {Route, Switch} from "react-router-dom";
import Landing from "../../pages/landing/landing";
import Layout from "../../layout/Layout";


const Question = (props) => {

    const {match} = props;

    return (
        <Layout>
            <Switch>
                <Route exact path={`${match.url}`} render={(props) => <Landing {...props}/> }/>
            </Switch>
        </Layout>
    )
};

export default Question;