import React from "react";
import "../../assets/scss/pages/user/login.scss";

const Login = () => {
    return(
        <div className={"p__login"}>
           <div className={"login-card"}>
                <p className={"login-title"}>로그인</p>
               <div className={"login-form"}>
                   <div className={"login-form-group"}>
                        <input
                            type={"email"}
                            className={"auth-input"}
                            placeholder={"이메일을 입력하시오"}
                            // value={}

                        />
                       <div className={"has-error"}>
                           <div className={"f__feedback"}></div>
                       </div>
                   </div>
                   <div className={"login-form-group"}>
                       <input
                           type={"password"}
                           className={"auth-input"}
                           placeholder={"비밀번호를 입력하시오"}
                           // value={}

                       />
                       <div className={"has-error"}>
                           <div className={"f__feedback"}></div>
                       </div>
                   </div>
               </div>
               <div className={"login-button"}>
                   <button className={"password-btn"}>비밀번호찾기</button>
                   <button type={"button"} className={"btn__solid basic"}>로그인</button>
                   <button type={"button"} className={"btn__solid join"}>회원가입하기</button>
                   <button type={"button"} className={"btn__solid kakao"}>카카오로 시작하기</button>
               </div>
           </div>
        </div>
    );
};

export default Login;