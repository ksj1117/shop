import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import '../../src/assets/scss/layout/layout.scss';


export default function Layout({children}) {
    return (
        <>
            <Header />
            <div className={"l__container"}>
                <main className={"l__main"}>{children}</main>
            </div>
            <Footer />
        </>
    )
}