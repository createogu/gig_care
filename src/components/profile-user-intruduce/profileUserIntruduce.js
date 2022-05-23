import * as React from "react";
import { Button, Avatar, Paper, TextField, Container } from "@mui/material";

import Divider from "@mui/material/Divider";

import "./profileUserIntroduce.css";

export default function ProfileUserIntroduce() {
  return (
    <div>
      <Container id="introduceDiv">
        <TextField 
          id="outlined-textarea"
          placeholder="이 내용은 간병 수요자에게 보여집니다."
          fullWidth
          multiline
        />
      <div>
        <Button variant="contained" disableElevation>
          수정
        </Button>
      </div>        
      </Container>
    </div>
  );
}
