import * as React from "react";
import { Button, Avatar, Paper, TextField, Container, Typography } from "@mui/material";
import { useState } from "react";
import FullScreenDialog from "../../moodules/fullScreenDialog/fullScreenDialog";
import ProfileUserIntroduceEdit from "./ProfileUserIntroduceEdit";
import "./profileUserIntroduce.css";

export default function ProfileUserIntroduce() {
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [myIntroduce, setMyIntroduce] = useState();
  function openEditDialog() {
    setIsOpenDialog(true);
  }
  return (
    <div>
      <Typography variant="body1" whiteSpace={"pre-wrap"}>
        {myIntroduce}
      </Typography>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={openEditDialog}
      >
        수정
      </Button>
      <FullScreenDialog
        isOpenDialog={isOpenDialog}
        setIsOpenDialog={setIsOpenDialog}
        title={"자기소개 수정"}
      >
        <ProfileUserIntroduceEdit setIsOpenDialog={setIsOpenDialog} myIntroduce={myIntroduce} setMyIntroduce={setMyIntroduce} />
      </FullScreenDialog>
    </div>
  );
}
