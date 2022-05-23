import * as React from "react";
import { Button, Avatar, Chip, Grid } from "@mui/material";
import "./profileUserSkill.css";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import DoneIcon from "@mui/icons-material/Done";
export default function ProfileUserSkill() {
  function tryLogin() {}
  return (
    <div id="profileSkillMain">
      <Grid container spacing={2}>
        <Chip
          className="CusotomChip"
          label="석션"
          variant="outlined"
          color="primary"
          icon={<DoneIcon />}
        />
        <Chip
          className="CusotomChip"
          label="기저귀"
          variant="outlined"
          color="primary"
          icon={<DoneIcon />}
        />
        <Chip
          className="CusotomChip"
          label="기저귀"
          variant="outlined"
          color="primary"
          icon={<DoneIcon />}
        />
        <Chip
          className="CusotomChip"
          label="기저귀"
          variant="outlined"
          color="primary"
          icon={<DoneIcon />}
        />
        <Chip
          className="CusotomChip"
          label="기저귀"
          variant="outlined"
          color="primary"
          icon={<DoneIcon />}
        />
        <Chip
          className="CusotomChip"
          label="기저귀"
          variant="outlined"
          color="primary"
          icon={<DoneIcon />}
        />
        <Chip
          className="CusotomChip"
          label="기저귀"
          variant="outlined"
          color="primary"
          icon={<DoneIcon />}
        />
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={tryLogin}
      >
        저장
      </Button>      
    </div>
  );
}
