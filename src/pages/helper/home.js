import React from "react";
import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import PageFooter from "../../components/common/page-footer/page-footer";
const Home = (propse) => {
  let name = useSelector((state) => state.user);
  return (
    <Container maxWidth={"sm"}>
      <Outlet></Outlet>
      <PageFooter
        menuGb={propse.menuGb}
        loginUserInfo={propse.loginUserInfo}
        setLoginUserInfo={propse.setLoginUserInfo}
      />
    </Container>
  );
};

export default Home;
