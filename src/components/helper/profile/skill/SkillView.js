import * as React from "react";
import {
  IconButton,
  Box,
  Chip,
  Button,
  Grid,
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Divider,
  Container,
  Typography,
} from "@mui/material";
import "./Skill.css";
import Stack from "@mui/material/Stack";
import DoneIcon from "@mui/icons-material/Done";
import { useState } from "react";
import FullScreenDialog from "../../../../moodules/fullScreenDialog/fullScreenDialog";
import SkillEdit from "./SkillEdit";
import EditIcon from "@mui/icons-material/Edit";
export default function SkillView(props) {
  let helperInfo = props.helperInfo;
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [tagList, setTagList] = useState([]);
  function openEditDialog() {
    setIsOpenDialog(true);
  }

  return (
    <Container maxWidth={"sm"}>
      <Card variant="none">
        <CardHeader
          title="돌봄대상"
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
        {props.tag.map((tagItem, index) => {
          return (
            <Chip
              sx={{ mb: 1, mr: 1 }}
              key={index}
              label={tagItem.tagNm}
              
            />
          );
        })}
        </CardContent>
      </Card>

      <FullScreenDialog
        isOpenDialog={isOpenDialog}
        setIsOpenDialog={setIsOpenDialog}
        title={"돌봄대상 수정"}
      >
        <SkillEdit
          tagList={props.tag}
          helperInfo={helperInfo}
          setIsOpenDialog={setIsOpenDialog}
          setTagList={setTagList}
        />
      </FullScreenDialog>
    </Container>
  );
}
