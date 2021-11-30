import React from "react";
import "../assets/scss/layout/footer.scss";
import {InviteIcon} from "../svg/InviteIcon";

export default function Footer () {
    return (
        <>
            <div className={"l__footer"}>
                <div className={"footer top"}>
                    <InviteIcon/>
                    <InviteIcon/>
                    <InviteIcon/>
                </div>
                <div className={"footer middle"}>

                </div>
                <div className={"footer bottom"}>
                    <p> 상호: 오비에 Aubier | 대표: KIM JIEUN | 개인정보관리책임자: KIM JIEUN | 전화: 070-8065-0281 | 이메일: aubiershop@gmail.com <br />
                        주소: (15090) 경기도 시흥시 공단1대로 204, 33동 306호(반품 주소지 X) | 사업자등록번호: 445-46-00647 | 통신판매: 2021-경기시흥-0551 | 호스팅제공자: (주)식스샵</p>
                </div>
            </div>
        </>
    )
}
