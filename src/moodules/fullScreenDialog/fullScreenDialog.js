import * as React from "react";

import Dialog from "@mui/material/Dialog";
import Dialogheader from "../../components/page-header/dialog-header";
export default function FullScreenDialog(props) {
  const handleClose = () => {};

  return (
    <div>
      <Dialog open={props.isOpenDialog} fullScreen onClose={handleClose}>
        <Dialogheader title={props.title} setIsOpenDialog={props.setIsOpenDialog}/>{props.children}
      </Dialog>
    </div>
  );
}
