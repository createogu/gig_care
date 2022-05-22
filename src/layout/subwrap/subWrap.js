import * as React from "react";
import Paper from "@mui/material/Paper";
import "./subWrap.css"
import { Divider } from "@mui/material";


export default function SubWrap(props) {
  return (
    <Paper className="subWrap" elevation={3}>
      <div className="subWrap-title">{props.title} 
      
      </div>
      <Divider/>
      <div>{props.children}</div>
    </Paper>
  );
}
