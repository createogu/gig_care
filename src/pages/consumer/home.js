import React from "react";
import { Outlet } from "react-router-dom";
import PageFooter from "../../components/common/page-footer/page-footer";

const Home = (propse) => {
  return (
    <div>
      <Outlet></Outlet>
      <PageFooter
        menuGb={propse.menuGb}
        loginUserInfo={propse.loginUserInfo}
        setLoginUserInfo={propse.setLoginUserInfo}
      />
    </div>
  );
};

export default Home;
