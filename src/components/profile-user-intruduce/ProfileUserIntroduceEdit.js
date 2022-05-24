import * as React from "react";
import { Button, Avatar, Paper, TextField, Container } from "@mui/material";
import SubWrap from "../../layout/subwrap/subWrap";
import Divider from "@mui/material/Divider";

import "./profileUserIntroduce.css";

export default function ProfileUserIntroduceEdit() {

  function openEditDialog() {

  }
  return (
    <SubWrap  subTitle={"작성한 내용은 간병인에게 보여집니다."}>
      <TextField
        id="outlined-textarea"
        fullWidth
        multiline
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={openEditDialog}
      >
        저장
      </Button>
    </SubWrap>
  );
}
