import * as React from "react";
import {
  Avatar,
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
export default function SkillView(props) {
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [mySkills, setMySkills] = useState([]);
  function openEditDialog() {
    setIsOpenDialog(true);
  }

  return (
    <Container maxWidth={"sm"}>
      <Card variant="none">
        <CardHeader title="돌봄대상" />
        <Divider variant="middle" />
        <CardContent>
          <Grid container spacing={2}>
            {mySkills.map((item, index) => {
              return (
                <div>
                  <Chip
                    className="CusotomChip"
                    label={item.comm_nm}
                    variant="outlined"
                    color="primary"
                    icon={<DoneIcon />}
                  />
                </div>
              );
            })}
          </Grid>
        </CardContent>
        {props.isEditable ? (
          <CardActions>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 1 }}
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
        title={"보유기술 수정"}
      >
        <SkillEdit mySkills={mySkills} setMySkills={setMySkills} />
      </FullScreenDialog>
    </Container>
  );
}
