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
import SubWrap from "../../../../layout/subwrap/subWrap";
import Divider from "@mui/material/Divider";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import "./AboutMe.css";

export default function AboutMeEdit(props) {
  const [AboutMe, setAboutMe] = useState("");
  const [textLength, setTextLength] = useState(0);
  const [isValidate, setIsValidate] = useState(true);
  const [validateText, setValidateText] = useState();

  function closeEditDialog() {
    props.setIsOpenDialog(false);
  }

  function validateCheck() {
    let validate = textLength > 10 && textLength <= 100 ? true : false;
    let valiText = !validate
      ? "입력조건을 확인해주세요.(10자 이상, 100자 이하)"
      : null;

    setValidateText(valiText);
    setIsValidate(validate);
  }
  function modifyAboutMe() {
    (async () => {
      try {
        const res = await axios.post(
          process.env.REACT_APP_BACK_BASE_URL + "/construct/user/modify.do",
          {
            userId: props.helperInfo.userId,
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
    <Box sx={{ p: 1 }}>
      <TextField
        id="outlined-textarea"
        fullWidth
        multiline
        placeholder={"보호자에게 나를 소개해 주세요."}
        helperText={
          <Box>
            <Box
              sx={{
                alignItems: "end",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p> {textLength} / 100 글자 </p>
            </Box>
            <Typography
              variant={"body2"}
              sx={{ textAlign: "right", color: "red" }}
            >
              {validateText}
            </Typography>
          </Box>
        }
        maxRows={5}
        minRows={5}
        defaultValue={AboutMe}
        onChange={(e) => {
          setTextLength(e.target.value.length);
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
    </Box>
  );
}
