import * as React from "react";
import {
  Button,
  Avatar,
  Paper,
  TextField,
  Container,
  Typography,
} from "@mui/material";
import { useState } from "react";
import FullScreenDialog from "../../moodules/fullScreenDialog/fullScreenDialog";
import ProfileUserAboutMeEdit from "./ProfileUserAboutMeEdit";
import "./profileUserAboutMe.css";

export default function ProfileUserAboutMe(props) {
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [myAboutMe, setMyAboutMe] = useState();
  function openEditDialog() {
    setIsOpenDialog(true);
  }
  return (
    <div>
      <Typography variant="body1" whiteSpace={"pre-wrap"}>
        {myAboutMe}
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
        <ProfileUserAboutMeEdit
          setIsOpenDialog={setIsOpenDialog}
          loginUserInfo={props.loginUserInfo}
          myAboutMe={myAboutMe}
          setMyAboutMe={setMyAboutMe}
        />
      </FullScreenDialog>
    </div>
  );
}
