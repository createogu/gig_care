import * as React from "react";
import { Button, Avatar, Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

import "./profileUserInfo.css";

export default function ProfileUserInfo() {
  return (
    <div>
      <div id="profileMain">
        <div id="profileMain-thumnail-div">
          <img id="profileMain-thumnail-img" src="./logo192.png" />
        </div>
        <div>오민우</div>
        <div id="profileMain-hpNo">010-7208-6332</div>
        
        <Stack
          justifyContent="center"
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={4}
        >
          <div> 대한민국</div>
          
          <div>32</div>
          <div>남자</div>
        </Stack>

      </div>
    </div>
  );
}
