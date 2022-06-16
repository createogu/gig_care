import * as React from "react";
import {
  Button,
  Avatar,
  Paper,
  TextField,
  Container,
  Box,
  Typography,
} from "@mui/material";
import SubWrap from "../../layout/subwrap/subWrap";
import Divider from "@mui/material/Divider";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import "./profileUserAboutMe.css";

export default function ProfileUserAboutMeEdit(props) {
  const [AboutMe, setAboutMe] = useState("");
  const [rowCount, setRowCount] = useState(0);
  const [textLength, setTextLength] = useState(0);
  const [isValidate, setIsValidate] = useState(true);
  const [validateText, setValidateText] = useState();

  function closeEditDialog() {
    props.setIsOpenDialog(false);
  }

  function validateCheck() {
    let validate = textLength <= 100 && rowCount <= 5 ? true : false;
    let valiText = !validate ? "입력조건을 확인해주세요." : null;

    setValidateText(valiText);
    setIsValidate(validate);
  }
  function modifyAboutMe() {
    (async () => {
      try {
        const res = await axios.post(
          "http://construct.agig.co.kr/construct/user/modify.do",
          {
            userId: props.loginUserInfo.userId,
            aboutMe: AboutMe,
          }
        );
      } catch (e) {
        console.error(e);
      }
    })();
  }
  useEffect(() => {
    setAboutMe(props.myAboutMe);
    setTextLength(props.myAboutMe == null ? 0 : props.myAboutMe.length);
  }, []);

  return (
    <SubWrap subTitle={"100글자 이내, 5줄 이하 입력가능"}>
      <TextField
        id="outlined-textarea"
        fullWidth
        multiline
        helperText={
          <div>
            <Box
              sx={{
                alignItems: "end",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p> {textLength} / 100 글자 </p>
              <p>{rowCount} / 5줄</p>
            </Box>
            <Typography
              variant={"body2"}
              sx={{ textAlign: "right", color: "red" }}
            >
              {validateText}
            </Typography>
          </div>
        }
        maxRows={5}
        minRows={5}
        defaultValue={AboutMe}
        onChange={(e) => {
          setTextLength(e.target.value.length);
          setRowCount(e.target.value.split("\n").length);
          setAboutMe(e.target.value);
        }}
        onKeyUp={(e) => {
          validateCheck(e.target.value);
          console.log(e.target.value.rows);
        }}
        onBlur={(e) => {
          validateCheck(e.target.value);
        }}
      />

      <Button
        type="submit"
        disabled={!isValidate}
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={() => {
          modifyAboutMe();
          props.setMyAboutMe(AboutMe);
          closeEditDialog();
        }}
      >
        저장
      </Button>
    </SubWrap>
  );
}
