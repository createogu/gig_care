import React from "react";
import SubHeader from "../components/page-header/sub-header.js";
import ProfileUserInfo from "../components/profile-user-info/profileUserInfo";
import ProfileUserCareer from "../components/profile-user-career/profileUserCareer";
import ProfileUserAboutMe from "../components/profile-user-aboutMe/profileUserAboutMe";
import ProfileUserAddress from "../components/profile-user-address/profileUserAddress";
import ProfileUserSkill from "../components/profile-user-skill/profileUserSkill.js";
import CanWorkDayCalender from "../components/calender-main/calenderComponent";
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
        <Grid item xs={12} md={12} order={0}>
          <SubWrap title={""}>
            <ProfileUserInfo loginUserInfo={props.loginUserInfo} />
          </SubWrap>
        </Grid>
        <Grid item xs={12} md={12} order={0}>
          <SubWrap title={"내 주소"}>
            <ProfileUserAddress loginUserInfo={props.loginUserInfo} />
          </SubWrap>
        </Grid>
        <Grid item xs={12} md={12}>
          <SubWrap title={"자기소개"} order={2}>
            <ProfileUserAboutMe loginUserInfo={props.loginUserInfo} />
          </SubWrap>
        </Grid>

        <Grid item xs={12} md={12} order={3}>
          <SubWrap title={"희망근무"}>
            <ProfileUserSkill loginUserInfo={props.loginUserInfo} />
          </SubWrap>
        </Grid>
        <Grid item xs={12} md={12} order={4}>
          <SubWrap title={"근무가능일"}>
            <CanWorkDayCalender loginUserInfo={props.loginUserInfo} />
          </SubWrap>
        </Grid>
        <Grid item xs={12} md={12} order={4}>
          <SubWrap title={"근무이력"}>
            <ProfileUserCareer loginUserInfo={props.loginUserInfo} />
          </SubWrap>
        </Grid>
      </Grid>
    </MainWrap>
  );
};

export default Profile;
