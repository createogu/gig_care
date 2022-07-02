import React from "react";
import MainWrap from "../../layout/mainwrap/mainWrap";
import SubWrap from "../../layout/subwrap/subWrap";
import SubHeader from "../../components/common/page-header/sub-header.js";
import CalenderComponent from "../../components/common/calender-main/calenderComponent";
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
        <SubWrap title={"안내사항"} subTitle={"날짜 클릭 선택, 다시 누르면 취소"}>
          <CalenderComponent />
        </SubWrap>
      </Stack>
    </MainWrap>
  );
};

export default Calender;
