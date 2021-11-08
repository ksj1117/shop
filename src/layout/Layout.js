import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import '../assets/scss/layout/layout.scss';


const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div className={"l__container"}>
                <main className={"l__main"}>{children}</main>
            </div>
            <Footer />
        </>
    )
};

export default Layout;