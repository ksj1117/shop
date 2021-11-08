import React from "react";
import {Route, Switch} from "react-router-dom";


const Question = (props) => {

    const {match} = props;

    return (
        <Switch>
            <Route exact path={`${match.url}`} render={(props) => <Question {...props}/> }/>
        </Switch>
    )
};

export default Question;