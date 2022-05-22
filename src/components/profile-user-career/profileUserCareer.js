import * as React from "react";

import { Button, Avatar } from "@mui/material";
import "./profileUserCareer.css";
import SubWrap from "../../layout/subwrap/subWrap";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
export default function ProfileUserCareer() {
  return (
    <div>
      <SubWrap title={"간병이력"}>
        <div id="profileMain">
          <Stack
            justifyContent="center"
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={4}
          >
            <div> 29일 12시간</div>
          </Stack>
          <div>
            <Button variant="contained" disableElevation>
              자세히 보기
            </Button>
          </div>
        </div>
      </SubWrap>
    </div>
  );
}
