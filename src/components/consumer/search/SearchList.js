import * as React from "react";
import { Stack } from "@mui/material";
import UserInfoList from "../../helper/profile/userInfo/UserInfoListView.js";
import { useState } from "react";

export default function SearchList(props) {
  return (
    <Stack alignItems="center" spacing={1} sx={{pb:8, pt:1}}>
      <UserInfoList />
      <UserInfoList />
      <UserInfoList />
      <UserInfoList />
      <UserInfoList />
      <UserInfoList />
      <UserInfoList />
    </Stack>
  );
}
