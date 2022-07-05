import * as React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Divider,
  Container,
  Typography,
} from "@mui/material";
import "./Charge.css";
import { useState } from "react";
import FullScreenDialog from "../../../../moodules/fullScreenDialog/fullScreenDialog";
import ChargeEdit from "./ChargeEdit";
export default function ChargeView(props) {
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [myCharges, setMyCharges] = useState([]);
  function openEditDialog() {
    setIsOpenDialog(true);
  }

  return (
    <Container maxWidth={"sm"}>
      <Card variant="none">
        <CardHeader title="비용설정" />
        <Divider variant="middle" />
        <CardContent></CardContent>
        {props.isEditable ? 
        <CardActions>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 1, mb: 1 }}
            onClick={openEditDialog}
          >
            수정
          </Button>
        </CardActions>
        : null}
      </Card>

      <FullScreenDialog
        isOpenDialog={isOpenDialog}
        setIsOpenDialog={setIsOpenDialog}
        title={"보유기술 수정"}
      ></FullScreenDialog>
    </Container>
  );
}
