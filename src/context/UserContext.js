/*
import React, { useEffect, useState } from "react";
import axios from "axios";

const UserContext = React.createContext();

const { Provider } = UserContext;

const UserProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({
        dataState: false, // 컨텍스트 데이터 유무
        loggedIn: false, // 로그인 여부
        user: {}, // 사용자 정보
    });

    const login = (userInfo) => {
        setUserInfo({
            dataState: true,
            loggedIn: true,
            user: userInfo,
        });
        console.log(userInfo)
        localStorage.setItem("jwt", userInfo.userId);
    };

    const logout = () => {
        localStorage.removeItem("jwt");
        setUserInfo({
            dataState: false,
            loggedIn: false,
            user: {},
        });
        window.location.href = "/login";
    };

    useEffect(() => {
        const userId = localStorage.getItem("jwt");
        if (userId) {
            // 로컬스토리지 값(userId)을 api로 보내서 다시 유저정보를 채운다.
            axios
                .get(`${process.env.REACT_APP_API_URL}/user/info?userId=${userId}`)
                .then((res) => {
                    if (res.data.status === 0) {
                        setUserInfo({
                            dataState: true,
                            loggedIn: true,
                            user: res.data.data,
                        });
                    } else {
                        localStorage.removeItem("jwt");
                        setUserInfo({
                            dataState: false,
                            loggedIn: false,
                            user: {},
                        });
                        window.location.href = "/login";
                    }
                })
                .catch((err) => {
                    localStorage.removeItem("jwt");
                    setUserInfo({
                        dataState: false,
                        loggedIn: false,
                        user: {},
                    });
                    window.location.href = "/login";
                });
        } else {
            localStorage.removeItem("jwt");
            setUserInfo({
                dataState: false,
                loggedIn: false,
                user: {},
            });
        }
    }, []);
    return <Provider value={{ userInfo, setUserInfo, login, logout }}>{children}</Provider>;

};

export { UserContext, UserProvider };*/
