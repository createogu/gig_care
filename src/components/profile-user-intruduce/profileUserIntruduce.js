import * as React from "react";
import { Button, Avatar, Paper, TextField, Container } from "@mui/material";

import Divider from "@mui/material/Divider";

import "./profileUserIntroduce.css";

export default function ProfileUserIntroduce() {
  function tryLogin() {}
  return (
    <div>
      <TextField
        id="outlined-textarea"
        placeholder="이 내용은 간병 수요자에게 보여집니다."
        fullWidth
        multiline
      />
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
