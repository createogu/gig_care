import React from "react";
import { Box, Container } from "@mui/material";
import { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HelperHome from "./helper/home.js";
import ConsumerHome from "./consumer/home.js";
import SignUp from "./helper/SignUp.js";
import MyProfile from "./helper/myProfile.js";
import Calender from "./helper/calender.js";
import Contract from "./helper/contract.js";
import Payment from "./helper/payment.js";
import HelperList from "./consumer/helperList.js";

import NotFound from "./exceptioin/404.js";
import KakaoRedirectHandeler from "../oauth/kakaoRedirectHandeler";
const Main = () => {
  const [loginUserInfo, setLoginUserInfo] = useState(null);
  const theme = createTheme({
    palette: {
      primary: {
        light: "#757ce8",
        main: "#61c9a8",
        dark: "#002884",
        contrastText: "#fff",
      },
      secondary: {
        light: "#ff7961",
        main: "#f44336",
        dark: "#ba000d",
        contrastText: "#000",
      },
    },
  });
  useEffect(() => {
    const userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
    if (userInfo ?? false) {
      setLoginUserInfo(userInfo);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route
          path="/"
          element={
            <HelperHome
              menuGb={"helper"}
              loginUserInfo={loginUserInfo}
              setLoginUserInfo={setLoginUserInfo}
            />
          }
        ></Route>
        <Route
          path="oauth/callback/kakao"
          element={<KakaoRedirectHandeler menuGb={"helper"} />}
        />
        <Route
          path="/helper"
          element={
            <HelperHome
              menuGb={"helper"}
              loginUserInfo={loginUserInfo}
              setLoginUserInfo={setLoginUserInfo}
            />
          }
        >
          <Route path="SignUp" element={<SignUp />} />
          <Route
            path="profile"
            element={
              <MyProfile
                loginUserInfo={loginUserInfo}
                isEditable={true}
                title="프로필 관리"
              />
            }
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
          <Route path="helperList" element={<HelperList />} />
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </ThemeProvider>
  );
};

export default Main;
