import * as React from "react";
import {
  Avatar,
  Box,
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
import "./AboutMe.css";

export default function AboutMeView(props) {
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [myAboutMe, setMyAboutMe] = useState();
  function openEditDialog() {
    setIsOpenDialog(true);
  }
  return (
    <Container maxWidth={"sm"}>
      <Card variant="none">
        <CardHeader title="자기소개" />
        <Divider variant="middle" />
        <CardContent>
          <Typography variant="body1" whiteSpace={"pre-wrap"}>
            안녕하세요 오민우입니다.
            열심히하겠습니다.
            {/* {myAboutMe} */}
          </Typography>
        </CardContent>
        {props.isEditable ? (
          <CardActions>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={openEditDialog}
            >
              수정
            </Button>
          </CardActions>
        ) : null}
      </Card>

      <FullScreenDialog
        isOpenDialog={isOpenDialog}
        setIsOpenDialog={setIsOpenDialog}
        title={"자기소개 수정"}
      >
        <AboutMeEdit
          setIsOpenDialog={setIsOpenDialog}
          loginUserInfo={props.loginUserInfo}
          myAboutMe={myAboutMe}
          setMyAboutMe={setMyAboutMe}
        />
      </FullScreenDialog>
    </Container>
  );
}
