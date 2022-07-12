import React from "react";
import SubHeader from "../../components/common/page-header/sub-header.js";
import UserInfo from "../../components/helper/profile/userInfo/UserInfoCardView.js";
import Career from "../../components/helper/profile/career/CareerView.js";
import AboutMe from "../../components/helper/profile/aboutMe/AboutMeView.js";
import Address from "../../components/helper/profile/address/AddressView.js";
import Skill from "../../components/helper/profile/skill/SkillView.js";
import Charge from "../../components/helper/profile/charge/ChargeView.js";
import CanWorkDayCalender from "../../components/common/calender-main/calenderComponent.js";
import Stack from "@mui/material/Stack";
import MainWrap from "../../layout/mainwrap/mainWrap";
import SubWrap from "../../layout/subwrap/subWrap";
import { useState, useEffect } from "react";
import axios from "axios";

export default function MyProfile(props) {
  const [myProfile, setMyProfile] = useState(null);
  const [isEditable, setIsEditable] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.post(
          process.env.REACT_APP_BACK_BASE_URL + "/helper/getMyProfile.do",
          {
            userId: props.loginUserInfo.userId,
          }
        );
        console.log(res);
        let rtnData = res.data;
        if (rtnData != null) {
          setMyProfile(rtnData);
          setIsEditable(true)
        }
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);
  
  return (
    <MainWrap>
      {myProfile && (
        <Stack alignItems="center" spacing={1} sx={{ pb: 7 }}>
          <UserInfo loginUserInfo={props.loginUserInfo} />
          <Address
            loginUserInfo={props.loginUserInfo}
            isEditable={isEditable}
          />
          <AboutMe
            loginUserInfo={props.loginUserInfo}
            isEditable={isEditable}
          />
          <Charge myCharge={myProfile.charge} isEditable={isEditable} />
          <Skill
            loginUserInfo={props.loginUserInfo}
            isEditable={isEditable}
          />
          <Career
            loginUserInfo={props.loginUserInfo}
            isEditable={isEditable}
          />
          <CanWorkDayCalender
            loginUserInfo={props.loginUserInfo}
            isEditable={isEditable}
          />
        </Stack>
      )}
    </MainWrap>
  );
}
