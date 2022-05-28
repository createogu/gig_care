import * as React from "react";
import { Container } from "@mui/material";
import Paper from "@mui/material/Paper";
import "./subWrap.css";
import { Divider } from "@mui/material";

export default function SubWrap(props) {
  return (
    <Container maxWidth={"sm"}>
      <Paper className="subWrap" elevation={3}>
        <div className="subWrap-title">
          {props.title}
        </div>
        <div className="subWrap-subTitle">
          {props.subTitle}
        </div>


        {(props.title == "" || props.subTitle == "") ? null : <Divider />}

        <div className="childDiv">{props.children}</div>
      </Paper>
    </Container>
  );
}
