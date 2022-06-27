import * as React from "react";
import { Button, Avatar, Chip, Grid } from "@mui/material";
import "./profileUserSkill.css";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import DoneIcon from "@mui/icons-material/Done";
import { useState } from "react";
import FullScreenDialog from "../../../moodules/fullScreenDialog/fullScreenDialog";
import ProfileUserSkillEdit from "./profileUserSkillEdit";
export default function ProfileUserSkill() {
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [mySkills, setMySkills] = useState([]);
  function openEditDialog() {
    setIsOpenDialog(true);
  }

  return (
    <div id="profileSkillMain">
      <Container>
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
      </Container>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 1, mb: 1 }}
        onClick={openEditDialog}
      >
        수정
      </Button>
      <FullScreenDialog
        isOpenDialog={isOpenDialog}
        setIsOpenDialog={setIsOpenDialog}
        title={"보유기술 수정"}
      >
        <ProfileUserSkillEdit mySkills={mySkills} setMySkills={setMySkills} />
      </FullScreenDialog>
    </div>
  );
}
