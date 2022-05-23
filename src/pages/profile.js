import React from "react";
import SubHeader from "../components/page-header/sub-header.js";
import ProfileUserInfo from "../components/profile-user-info/profileUserInfo";
import ProfileUserCareer from "../components/profile-user-career/profileUserCareer";
import ProfileUserIntroduce from "../components/profile-user-intruduce/profileUserIntruduce";
import Stack from "@mui/material/Stack";
import SubWrap from "../layout/subwrap/subWrap";
import SettingsIcon from '@mui/icons-material/Settings';
import { useEffect } from "react";

const Profile = () => {
  return (
    <div >
      <SubHeader title="프로필" />
      <Stack direction="column"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}>
        <SubWrap title={"개인정보"}>
          <ProfileUserInfo />
        </SubWrap>
        <SubWrap title={"자기소개"}>
          <ProfileUserIntroduce />
        </SubWrap>
        <SubWrap title={"간병이력"}>
          <ProfileUserCareer />
        </SubWrap>
        <SubWrap title={"간병이력"}>
          <ProfileUserCareer />
        </SubWrap>
      </Stack>
    </div>
  );
};

export default Profile;
