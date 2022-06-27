import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import ProducerHome from "./producer/home.js";
import ConsumerHome from "./consumer/home.js";
import SignUp from "./producer/SignUp.js";
import Profile from "./producer/profile.js";
import Calender from "./producer/calender.js";
import Contract from "./producer/contract.js";
import Payment from "./producer/payment.js";
import ProducerList from "./consumer/producerList.js"
import NotFound from "./exceptioin/404.js";
import KakaoRedirectHandeler from "../oauth/kakaoRedirectHandeler";
import MainHeader from "../components/common/page-header/main-header.js";
import SubHeader from "../components/common/page-header/sub-header.js";

const Main = () => {
  const [loginUserInfo, setLoginUserInfo] = useState(null);

  useEffect(() => {
    console.log(window.localStorage.getItem("userInfo"));
    if (window.localStorage.getItem("userInfo") ?? false) {
      const userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
      setLoginUserInfo(userInfo);
    }
  }, []);

  return (
    <div className="mainWrap">
      <Routes>
        <Route
          path="/producer"
          element={
            <ProducerHome
              menuGb={"producer"}
              loginUserInfo={loginUserInfo}
              setLoginUserInfo={setLoginUserInfo}
            />
          }
        >
          <Route path="SignUp" element={<SignUp />} />
          <Route
            path="profile"
            element={<Profile loginUserInfo={loginUserInfo} />}
          />
          <Route
            path="calender"
            element={<Calender loginUserInfo={loginUserInfo} />}
          />
          <Route
            path="contract"
            element={<Contract loginUserInfo={loginUserInfo} />}
          />
          <Route
            path="payment"
            element={<Payment loginUserInfo={loginUserInfo} />}
          />
          <Route
            path="oauth/callback/kakao"
            element={<KakaoRedirectHandeler />}
          />
        </Route>
        <Route
          path="/consumer"
          element={
            <ConsumerHome
              menuGb={"consumer"}
              loginUserInfo={loginUserInfo}
              setLoginUserInfo={setLoginUserInfo}
            />
          }
        >
          <Route path="producerList" element={<ProducerList />} />
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
};

export default Main;
