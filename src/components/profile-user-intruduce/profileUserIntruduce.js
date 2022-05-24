import * as React from "react";
import { Button, Avatar, Paper, TextField, Container } from "@mui/material";
import { useState } from "react";
import FullScreenDialog from "../../moodules/fullScreenDialog/fullScreenDialog";
import ProfileUserIntroduceEdit from "./ProfileUserIntroduceEdit";
import "./profileUserIntroduce.css";

export default function ProfileUserIntroduce() {
  const [isOpenDialog, setIsOpenDialog] = useState(false);

  function openEditDialog() {
    setIsOpenDialog(true);
  }
  return (
    <div>
      <TextField
        id="outlined-textarea"
        fullWidth
        InputProps={{
          readOnly: true,
        }}
        multiline
        maxRows="5"
      />
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
        <ProfileUserIntroduceEdit />
      </FullScreenDialog>
    </div>
  );
}
