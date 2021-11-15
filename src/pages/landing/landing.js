import React from "react";
import {useHistory} from "react-router-dom"
import "../../assets/scss/pages/landing/landing.scss";


const Landing = () => {

    return(
        <div className={"p__landing"}>
            <div className={"top-section"}>

            </div>
            <div className={"middle-section"}>
                <p className={"shop-title"}>Aubiér</p>
                <p className={"shop-desc"}>오비에는 누구나 편안하게 즐길 수 있는 웨어러블 룩을 지향합니다.<br/>
                    자연스러움, 클래식한 실루엣 그리고 심플한 디자인의<br/>
                    다양한 아이템을 소개합니다.</p>
            </div>
        </div>
    );
};

export default Landing;