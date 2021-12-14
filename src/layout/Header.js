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
            <div className={"l__main"}>
                <div className={"row"}>
                    <Link to = {"/main"}><h1 className={"logo"}/></Link>
                    <ul className={"nav"}>
                        <li className={"nav-item selected"} onClick={() => history.push("/shop/list")}>Shop</li>
                        <li className={"nav-item"} onClick={() => history.push("/info/notice")}>Info</li>
                        <li className={"nav-item"} onClick={() => history.push("/question/list")}>Q&A</li>
                        <li className={"nav-item"} onClick={() => history.push("/user/login")}>Login</li>
                    </ul>
                </div>
            </div>
        </header>
    )
};