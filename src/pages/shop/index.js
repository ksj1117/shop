import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import ProductList from "./ProductList";
import Detail from "./Detail";
import Layout from "../../layout/Layout";


const Shop = (props) => {
    const {match} = props;

    return (
        <Layout>
            <Switch>
                <Route exact path={`${match.url}/list`} render={(props) => <ProductList {...props}/> }/>
                <Route exact path={`${match.url}/detail`} render={(props) => <Detail {...props}/> }/>
                <Redirect to={`${match.url}/list`}/>
            </Switch>
        </Layout>
    )
};

export default Shop;