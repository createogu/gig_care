import { Box, Button, Divider, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import * as common from "./../../common/util/common";

export default function ProfileUserAdressEdit(props) {
  let location = null;

  location = common.getLocation();

  const [adress, setAdress] = useState("");

  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    ></Box>
  );
}
