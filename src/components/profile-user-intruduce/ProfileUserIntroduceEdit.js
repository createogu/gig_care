import * as React from "react";
import { Button, Avatar, Paper, TextField, Container, Box, Typography } from "@mui/material";
import SubWrap from "../../layout/subwrap/subWrap";
import Divider from "@mui/material/Divider";
import { useState, useEffect, useRef } from "react";
import "./profileUserIntroduce.css";

export default function ProfileUserIntroduceEdit(props) {
  const [introduce, setIntroduce] = useState('');
  const [textLength, setTextLength] = useState(0);
  const [isValidate, setIsValidate] = useState(true);
  const [validateText, setValidateText] = useState();

  function openEditDialog() {
    props.setIsOpenDialog(false);
  }
  function validateCheck(value) {
    let valiText = textLength > 100 ? "입력가능한 글자수를 초과했습니다." : null;
    let Validate = textLength > 100 ? false : true;
    let rowCount = 
    setValidateText(valiText);
    setIsValidate(Validate);
  }
  useEffect(() => {
    setIntroduce(props.myIntroduce);
    setTextLength(props.myIntroduce.length)
  }, [])

  return (
    <SubWrap subTitle={"작성한 내용은 간병인에게 보여집니다."}>
      <TextField
        id="outlined-textarea"
        fullWidth
        multiline
        helperText={<div>
          <Box sx={{
            alignItems: 'end',
            display: 'flex',
            flexDirection: 'column'
          }}>
            {textLength} / 100
          </Box>
          <Typography variant={'body2'} sx={{ textAlign: 'right', color: 'red' }} >
            {validateText}
          </Typography>
        </div>}
        maxRows={5}
        minRows={5}
        defaultValue={introduce}
        onChange={(e) => {
          setTextLength(e.target.value.length)
          setIntroduce(e.target.value);

        }}
        onKeyUp={(e) => {
          validateCheck(e.target.value);
          console.log(e.target.value.rows);
        }}
      />

      <Button
        type="submit"
        disabled={!isValidate}
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={() => {
          props.setMyIntroduce(introduce);
          openEditDialog();
        }}
      >
        저장
      </Button>
    </SubWrap>
  );
}
