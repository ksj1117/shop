import React from "react";
import "../../assets/scss/pages/question/question.scss";

const Question = () => {
    return(
        <div className={"p__question"}>
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
                        <div className={"td no"}>1</div>
                        <div className={"td subject"}>합배송문의</div>
                        <div className={"td writer"}>김소정</div>
                        <div className={"td count"}>4</div>
                        <div className={"td data"}>2021.10.10</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;