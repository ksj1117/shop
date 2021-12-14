import React from "react";
import {useHistory} from "react-router-dom"
import "../../assets/scss/pages/landing/landing.scss";
import Layout from "../../layout/Layout";


const Landing = () => {

    return(
        <Layout>
            <div className={"p__landing main"}>
                <div className={"top-section"}>

                </div>
                <div className={"middle-section"}>
                    <p className={"shop-title"}>Aubiér</p>
                    <p className={"shop-desc"}>오비에는 누구나 편안하게 즐길 수 있는 웨어러블 룩을 지향합니다.<br/>
                        자연스러움, 클래식한 실루엣 그리고 심플한 디자인의<br/>
                        다양한 아이템을 소개합니다.</p>
                </div>
               <div className={"bottom-section"}>
                   <div className={"left-wrap"}>
                       <p className={"left-wrap title"}>About Us</p>
                       <p className={"left-wrap content"}>
                           오비에는 누구나 편안하게 즐길 수 있는 웨어러블 룩을 지향합니다. <br/>
                           자연스러움, 클래식한 실루엣 그리고 심플한 디자인의 <br/>
                           다양한 아이템을 소개합니다.
                       </p>
                   </div>
                   <div className={"right-wrap"}>
                       <p className={"right-wrap title"}>The Brand</p>
                       <p className={"right-wrap content"}>
                           Aubiér offers a wide range of shoes, bags, accessories, and ready-to-wear for women. <br/>
                           Simply put, we’re not big on trends.<br/>
                           We introduce wearable items that anyone can enjoy.
                       </p>
                   </div>
               </div>
            </div>
        </Layout>
    )
};

export default Landing;