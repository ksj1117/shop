import React from "react";
import {Route, Switch} from "react-router-dom";
import ProductList from "./ProductList";
import Detail from "./Detail";
import Layout from "../../layout/Layout";


const Shop = (props) => {

    const {match} = props;

    return (
            <Switch>
                <Route exact path={`${match.url}/product`} render={(props) => <ProductList {...props}/> }/>
                <Route exact path={`${match.url}/detail`} render={(props) => <Detail {...props}/> }/>
            </Switch>
    )
};

export default Shop;