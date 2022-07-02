import React from "react";
import SubHeader from "../../components/common/page-header/sub-header";
import PageFooter from "../../components/common/page-footer/page-footer.js";

import MainWrap from "../../layout/mainwrap/mainWrap";
import Profile from "../helper/profile.js";
import Stack from "@mui/material/Stack";
import { Outlet } from "react-router-dom";
import UserInfoCard from "../../components/helper/profile/userInfo/UserInfoCardView";
import { useEffect } from "react";

const helperDetail = (props) => {
  return (
    <MainWrap>
      <Profile title="도우미 상세화면"/>
      <PageFooter/>
    </MainWrap>
  );
};

export default helperDetail;
