import * as React from "react";
import {
  IconButton,
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
import ChargeBar from "./ChargeBar";
import ChargeEdit from "./ChargeEdit";
import EditIcon from "@mui/icons-material/Edit";
export default function ChargeView(props) {
  const [isOpenDialog, setIsOpenDialog] = useState(false);

  function openEditDialog() {
    setIsOpenDialog(true);
  }

  return (
    <Container maxWidth={"sm"}>
      <Card variant="none">
        <CardHeader
          title="비용설정"
          action={
            props.isEditable ? (
              <CardActions>
                <IconButton type="submit" onClick={openEditDialog}>
                  <EditIcon />
                </IconButton>
              </CardActions>
            ) : null
          }
        />
        <Divider variant="middle" />
        <CardContent>
          <Box>
            <Typography
              sx={{ fontSize: 16, pb: 1 }}
              align="center"
              color="black"
              fontWeight="bolder"
            >
              최소기간 : {props.myCharge.minWorkDays} 일 / 비용 :
              {props.myCharge.chargePerDay} 원
            </Typography>
            <ChargeBar myCharge={props.myCharge} />
          </Box>
        </CardContent>
      </Card>

      {isOpenDialog ? (
        <FullScreenDialog
          isOpenDialog={isOpenDialog}
          setIsOpenDialog={setIsOpenDialog}
          title={"비용설정"}
        >
          <ChargeEdit
            myCharge={props.myCharge}
            setMyCharge={props.setMyCharge}
            setIsOpenDialog={setIsOpenDialog}
          />
        </FullScreenDialog>
      ) : null}
    </Container>
  );
}
