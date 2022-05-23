import React from "react";
import MainWrap from "../layout/mainwrap/mainWrap";
import SubWrap from "../layout/subwrap/subWrap";
import SubHeader from "../components/page-header/sub-header.js";
import CalenderComponent from "../components/calender-main/calenderComponent";
import Stack from "@mui/material/Stack";
const Calender = () => {
  return (
    <MainWrap>
      <SubHeader title="달력" />
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
      >
        <SubWrap title={"안내사항"}>
          <CalenderComponent />
        </SubWrap>
      </Stack>
    </MainWrap>
  );
};

export default Calender;
