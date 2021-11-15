import React, {useEffect, useState} from "react";
import "../assets/scss/layout/header.scss";
import {Link, useHistory} from "react-router-dom";

export default function Header () {

    const history = useHistory();

    const [pageYOffset , setPageYOffset] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll',scrollHandler);
        return () => window.removeEventListener('scroll',scrollHandler)
    },[pageYOffset]);

    function  scrollHandler() {
        setPageYOffset(window.pageYOffset);
    }


    return (
        <header className={`l__header ${pageYOffset === 0 ? 'scroll-top': ''}`}>
            <div className={"l__layout"}>
                <div className={"row"}>
                    <Link to = {"/"}><h1 className={"logo"}/></Link>
                    <ul className={"nav"}>
                        <li className={"nav-item selected"} onClick={() => history.push("/shop/product")}>Shop</li>
                        <li className={"nav-item"}>Info</li>
                        <li className={"nav-item"}>Q&A</li>
                        <li className={"nav-item"}>Login</li>
                    </ul>
                </div>
            </div>
        </header>
    )
};