import * as React from "react";
import { Container } from "@mui/material";
import Paper from "@mui/material/Paper";
import "./subWrap.css";
import { Divider } from "@mui/material";

export default function SubWrap(props) {
  return (
    <Container maxWidth={"sm"}>
      <Paper className="subWrap" elevation={3}>
        {props.title != "" ? (
          <div className="subWrap-title">
            {props.title} 
          </div>
        ) : null}

        {props.subTitle != "" ? (
          <div className="subWrap-subTitle">
            {props.subTitle} <Divider />
          </div>
        ) : <Divider />}

        <div className="childDiv">{props.children}</div>
      </Paper>
    </Container>
  );
}
