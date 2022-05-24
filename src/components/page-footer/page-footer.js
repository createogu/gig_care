import * as React from "react";
import { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Drawer from "@mui/material/Drawer";
import Modal from "@mui/material/Modal";
import FaceIcon from "@mui/icons-material/Face";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Paper from "@mui/material/Paper";
import HomeIcon from "@mui/icons-material/Home";
import LoginComponent from "../common-login/loginComponent";
import Confirm from "../../moodules/comfirm/confirm";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

const style = {
 
};

export default function PageFooter(props) {
  let navigate = useNavigate();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  let selectedMenuCode = "";
  const handleChange = (event, newValue) => {
    selectedMenuCode = newValue;
    if (newValue == "") {
      props.setValue(newValue);
      navigate("/" + newValue);
    } else {
      // 로그인이 필요한 페이지 접근시
      if (props.loginUserInfo != null) {
        props.setValue(newValue);
        navigate("/" + newValue);
      } else {
        props.setValue("");
        navigate("/");
        setIsConfirmOpen(true);
        // setIsLoginModalOpen(true);
      }
    }
  };

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        maxWidth="x1"
        showLabels
        value={props.value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          label="내정보"
          value="profile"
          icon={<FaceIcon />}
        />
        <BottomNavigationAction
          label="달력"
          value="calender"
          icon={<CalendarMonthIcon />}
        />
        <BottomNavigationAction label="홈화면" value="" icon={<HomeIcon />} /> 
        <BottomNavigationAction
          label="계약"
          value="contract"
          icon={<ReceiptLongIcon />}
        />
        <BottomNavigationAction
          label="지불"
          value="payment"
          icon={<AttachMoneyIcon />}
        />
      </BottomNavigation>

      {isLoginModalOpen ? (
        <Drawer
          anchor={"bottom"}
          open={() => {
            setIsLoginModalOpen(true);
          }}
          onClose={() => {
            setIsLoginModalOpen(false);
          }}
        >
          <LoginComponent
            selectedMenuCode={selectedMenuCode}
            setLoginUserInfo={props.setLoginUserInfo}
            setIsModalOpen={setIsLoginModalOpen}
          />
        </Drawer>
      ) : null}

      {/*  title : 제목
           content : 내용
           noBtnName : 취소 버튼 명
           yesBtnName : 확인 버튼 명 */}
      {isConfirmOpen ? (
        <div style={style}>
        <Modal
          open={() => {
            setIsConfirmOpen(true);
          }}
          onClose={() => {
            setIsConfirmOpen(false);
          }}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Confirm 
            title={"로그인"}
            content={"로그인이 필요한 화면입니다. 로그인 하시겠습니까?"}
            noBtnName={"아니오"}
            noEventFunction={setIsConfirmOpen}
            yesBtnName={"예"}
            yesEventFunction={setIsLoginModalOpen}
          ></Confirm>
        </Modal></div>
      ) : null}
    </Paper>
  );
}
