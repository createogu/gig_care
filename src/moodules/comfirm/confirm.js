import * as React from "react";
import Button from "@mui/material/Button";
import SubWrap from "../../layout/subwrap/subWrap.js";

// title : 제목
// content : 내용
// noBtnName : 취소 버튼 명
// yesBtnName : 확인 버튼 명

export default function Confirm(props) {
  const handleClickOpen = () => {
    props.yesEventFunction(true);
    props.noEventFunction(false);
  };

  const handleClose = () => {
    props.noEventFunction(false);
  };

  return (
    <SubWrap title={props.title}>
      <div id="content">
        <div id="contentText">{props.content}</div>
      </div>
      <div id="buttonBox">
        <Button onClick={handleClose}>{props.noBtnName}</Button>
        <Button onClick={handleClickOpen} autoFocus>
          {props.yesBtnName}
        </Button>
      </div>
    </SubWrap>
  );
}
