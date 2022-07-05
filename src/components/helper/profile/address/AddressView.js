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
import FullScreenDialog from "../../../../moodules/fullScreenDialog/fullScreenDialog";
import AddressEdit from "./AddressEdit";
import { useState } from "react";

export default function AddressView(props) {
  let user = props.loginUserInfo;
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [myAddress, setMyAddress] = useState();
  function openEditDialog() {
    setIsOpenDialog(true);
  }

  return (
    <Container maxWidth={"sm"}>
      <Card variant="none">
        <CardHeader title="내 주소" />
        <Divider variant="middle" />
        <CardContent>
          {" "}
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h5"
          ></Typography>
        </CardContent>
        {props.isEditable ? (
          <CardActions>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={openEditDialog}
            >
              수정
            </Button>
          </CardActions>
        ) : null}
      </Card>

      <FullScreenDialog
        isOpenDialog={isOpenDialog}
        setIsOpenDialog={setIsOpenDialog}
        title={"내 주소 설정"}
      >
        <AddressEdit
          setIsOpenDialog={setIsOpenDialog}
          loginUserInfo={props.loginUserInfo}
          myAddress={myAddress}
          setMyAddress={setMyAddress}
        />
      </FullScreenDialog>
    </Container>
  );
}
