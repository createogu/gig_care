import React from "react";
import { useState } from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Home from "./home.js";
import Profile from "./profile.js";
import Calender from "./calender.js";
import Contract from "./contract.js";
import Payment from "./payment.js";
import MainHeader from "../components/page-header/main-header.js";
import SubHeader from "../components/page-header/sub-header.js";
import PageFooter from "../components/page-footer/page-footer.js";

const Main = () => {
  const [value, setValue] = useState("");
  const [loginUserInfo, setLoginUserInfo] = useState(null);

  return (
    <div className="mainWrap">

      <Routes>
        <Route
          path="/"
          element={
            <Home
              loginUserInfo={loginUserInfo}
              setLoginUserInfo={setLoginUserInfo}
            />
          }
        />
        <Route path="/profile" element={<Profile loginUserInfo={loginUserInfo} />} />
        <Route path="/calender" element={<Calender loginUserInfo={loginUserInfo} />} />
        <Route path="/contract" element={<Contract loginUserInfo={loginUserInfo} />} />
        <Route path="/payment" element={<Payment loginUserInfo={loginUserInfo} />} />
      </Routes>
      <PageFooter
        value={value}
        setValue={setValue}
        loginUserInfo={loginUserInfo}
        setLoginUserInfo={setLoginUserInfo}
      />
    </div>
  );
};

export default Main;
