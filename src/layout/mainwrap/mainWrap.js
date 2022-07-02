import * as React from "react";
import { Container } from "@mui/material";
// import "./mainWrap.css";

export default function MainWrap(props) {
  return <div className="mainWrap">{props.children}</div>;
}
