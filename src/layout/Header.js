import React from "react";
import "../assets/scss/layout/header.scss";

const Header = () => {
    return (
        <>
            <header className={"l__header"}>
                로그인 마이페이지
            </header>
            <section className={"nav-wrap"}>
                <ul className={"nav-menu"}>
                    <li>OUTER</li>
                    <li>TOP</li>
                    <li>BOTTOM</li>
                    <li>BLOUSE</li>
                </ul>
            </section>
        </>
    )
};

export default Header;