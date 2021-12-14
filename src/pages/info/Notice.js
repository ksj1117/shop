import React from "react";
import "../../assets/scss/pages/info/notice.scss";
import "../../assets/scss/component/table.scss";

const Notice = () => {

    return (
     <div className={"p__notice"}>
        <div className={'c__table'}>
            <div className={"tr thead"}>
                <div className={"th no"}>번호</div>
                <div className={"th subject"}>제목</div>
                <div className={"th writer"}>글쓴이</div>
                <div className={"th count"}>조회수</div>
                <div className={"th date"}>등록일</div>
            </div>
            <div className={"tbody"}>
                <div className={"tr"}>
                    <div className={"td no"}>공지</div>
                    <div className={"td subject"}>반품 및 교환</div>
                    <div className={"td writer"}>관리자</div>
                    <div className={"td count"}>2</div>
                    <div className={"td data"}>2021.10.10</div>
                </div>
                <div className={"tr"}>
                    <div className={"td no"}>공지</div>
                    <div className={"td subject"}>공지사항</div>
                    <div className={"td writer"}>관리자</div>
                    <div className={"td count"}>2</div>
                    <div className={"td data"}>2021.10.10</div>
                </div>
            </div>
        </div>

     </div>
    )
};

export default Notice;
