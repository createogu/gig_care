import React from "react";
import SubHeader from "../components/page-header/sub-header.js";
import ProfileUserInfo from "../components/profile-user-info/profileUserInfo";
import ProfileUserCareer from "../components/profile-user-career/profileUserCareer";
import Stack from "@mui/material/Stack";
import SubWrap from "../layout/subwrap/subWrap";
import SettingsIcon from '@mui/icons-material/Settings';
import { useEffect } from "react";

const Profile = () => {
  return (
    <div>
      <SubHeader title="프로필" />
      <Stack direction="column" spacing={1.5}>
        <SubWrap title={"개인정보"}>
          <ProfileUserInfo />
        </SubWrap>        
        <ProfileUserCareer />
      </Stack>
    </div>
  );
};

export default Profile;
