import React from "react";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import MainHeader from "../components/page-header/main-header.js";
const Home = (propse) => {
  return (
    <div>
      <MainHeader
        loginUserInfo={propse.loginUserInfo}
        setLoginUserInfo={propse.setLoginUserInfo}
      />

      <Paper elevation={3} className="subWrap">
        <h2> 안녕하세요</h2>
        <p>간병인페이지 만들고있습니다.</p>
        <p>디자인 어렵습니다.</p>
        <p>기획도 어렵습니다.</p>
        <p>ㅠㅠㅠ</p>
      </Paper>
    </div>
  );
};

export default Home;
