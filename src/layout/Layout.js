import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import '../../src/assets/scss/layout/layout.scss';


const Layout = ({children}) => {
    return (
        <>
            <Header />
                <div style={{flex: 1}}>
                    {children}
                </div>
            <Footer />
        </>
    )
};

export default Layout;