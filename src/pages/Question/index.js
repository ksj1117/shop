import React from "react";
import {Route, Switch} from "react-router-dom";
import Layout from "../../layout/Layout";


const Question = (props) => {

    const {match} = props;

    return (
        <Layout>
            <Switch>
                <Route exact path={`${match.url}`} render={(props) => <Question {...props}/> }/>
            </Switch>
        </Layout>
    )
};

export default Question;