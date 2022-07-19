import * as React from "react";
import {
  IconButton,
  Button,
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Divider,
  Container,
  Typography,
} from "@mui/material";
import { useState } from "react";
import FullScreenDialog from "../../../../moodules/fullScreenDialog/fullScreenDialog";
import AboutMeEdit from "./AboutMeEdit";
import EditIcon from "@mui/icons-material/Edit";
import "./AboutMe.css";

export default function AboutMeView(props) {
  let helperInfo = props.helperInfo;
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [myAboutMe, setMyAboutMe] = useState(helperInfo.aboutMe);
  function openEditDialog() {
    setIsOpenDialog(true);
  }
  return (
    <Container maxWidth={"sm"}>
      <Card variant="none">
        <CardHeader
          title="자기소개"
          action={
            props.isEditable ? (
              <CardActions>
                <IconButton type="submit" onClick={openEditDialog}>
                  <EditIcon />
                </IconButton>
              </CardActions>
            ) : null
          }
        />
        <Divider variant="middle" />
        <CardContent>
          <Typography variant="body1" whiteSpace={"pre-wrap"}>
            {myAboutMe}
          </Typography>
        </CardContent>
      </Card>

      <FullScreenDialog
        isOpenDialog={isOpenDialog}
        setIsOpenDialog={setIsOpenDialog}
        title={"자기소개 수정"}
      >
        <AboutMeEdit
          setIsOpenDialog={setIsOpenDialog}
          helperInfo={helperInfo}
          myAboutMe={myAboutMe}
          setMyAboutMe={setMyAboutMe}
        />
      </FullScreenDialog>
    </Container>
  );
}
