import React from "react";
import SubHeader from "../../components/common/page-header/sub-header.js";
import UserInfo from "../../components/helper/profile/userInfo/UserInfoView.js";
import Career from "../../components/helper/profile/career/CareerView.js";
import AboutMe from "../../components/helper/profile/aboutMe/AboutMeView.js";
import Address from "../../components/helper/profile/address/AddressView.js";
import Skill from "../../components/helper/profile/skill/SkillView.js";
import Charge from "../../components/helper/profile/charge/ChargeView.js";
import CanWorkDayCalender from "../../components/common/calender-main/calenderComponent.js";
import Stack from "@mui/material/Stack";
import MainWrap from "../../layout/mainwrap/mainWrap";
import SubWrap from "../../layout/subwrap/subWrap";
import { useEffect } from "react";

const myProfile = (props) => {
  return (
    <MainWrap>
      {props.isEditable ? <SubHeader title={props.title} /> : null}

      <Stack alignItems="center" spacing={1}>
        <UserInfo loginUserInfo={props.loginUserInfo} />
        <Address
          loginUserInfo={props.loginUserInfo}
          isEditable={props.isEditable}
        />
        <AboutMe
          loginUserInfo={props.loginUserInfo}
          isEditable={props.isEditable}
        />
        <Charge
          loginUserInfo={props.loginUserInfo}
          isEditable={props.isEditable}
        />
        <Skill
          loginUserInfo={props.loginUserInfo}
          isEditable={props.isEditable}
        />
        <Career
          loginUserInfo={props.loginUserInfo}
          isEditable={props.isEditable}
        />
        {props.isEditable ? (
          <SubWrap title={"근무가능일"}>
            <CanWorkDayCalender loginUserInfo={props.loginUserInfo} />
          </SubWrap>
        ) : null}
      </Stack>
    </MainWrap>
  );
};

export default myProfile;
