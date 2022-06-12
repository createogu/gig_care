import * as React from "react";
import { Container } from "@mui/material";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "./subWrap.css";
import { Divider } from "@mui/material";

export default function SubWrap(props) {
  return (
    <Container maxWidth={"sm"}>
      <Card className="subWrap" elevation={3}>
        <CardContent>
          <div className="subWrap-title">{props.title}</div>
          <div className="subWrap-subTitle">{props.subTitle}</div>

          {props.title == "" || props.subTitle == "" ? null : <Divider />}

          <div className="childDiv">{props.children}</div>
        </CardContent>
      </Card>
    </Container>
  );
}
