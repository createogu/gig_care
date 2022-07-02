import * as React from "react";
import { Stack } from "@mui/material";
import UserInfoCard from "../../../components/helper/profile/userInfo/UserInfoCardView";
import { useState } from "react";

export default function SearchList(props) {
  return (
    <Stack alignItems="center" spacing={1}>
      <UserInfoCard/>
      
    </Stack>
  );
}
