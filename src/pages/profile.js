import React from "react";
import SubHeader from "../components/page-header/sub-header.js";
import ProfileUserInfo from "../components/profile-user-info/profileUserInfo";
import ProfileUserCareer from "../components/profile-user-career/profileUserCareer";
import ProfileUserIntroduce from "../components/profile-user-intruduce/profileUserIntruduce";
import ProfileUserSkill from "../components/profile-user-skill/profileUserSkill.js";
import Grid from "@mui/material/Grid";
import MainWrap from "../layout/mainwrap/mainWrap";
import SubWrap from "../layout/subwrap/subWrap";
import SettingsIcon from "@mui/icons-material/Settings";
import { useEffect } from "react";

const Profile = (props) => {
  return (
    <MainWrap>
      <SubHeader title="프로필" />
      <Grid container spacing={2}>
        <Grid item xs={16} md={4} order={0}>
          <SubWrap title={""}>
            <ProfileUserInfo loginUserInfo={props.loginUserInfo} />
          </SubWrap>
        </Grid>
        <Grid item xs={16} md={4}>
          <SubWrap title={"자기소개"} order={2}>
            <ProfileUserIntroduce />
          </SubWrap>
        </Grid>



        <Grid item xs={16} md={4} order={3}>
          <SubWrap title={"보유기술"}>
            <ProfileUserSkill />
          </SubWrap>
        </Grid>
        <Grid item xs={16} md={4} order={4}>
          <SubWrap title={"간병이력"}>
            <ProfileUserCareer />
          </SubWrap>
        </Grid>
      </Grid>
    </MainWrap >
  );
};

export default Profile;
