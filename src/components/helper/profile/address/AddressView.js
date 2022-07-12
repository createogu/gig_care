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
import FullScreenDialog from "../../../../moodules/fullScreenDialog/fullScreenDialog";
import AddressEdit from "./AddressEdit";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";

export default function AddressView(props) {
  let user = props.loginUserInfo;
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [myAddressNm, setMyAddressNm] = useState();
  function openEditDialog() {
    setIsOpenDialog(true);
  }

  return (
    <Container maxWidth={"sm"}>
      <Card variant="none">
        <CardHeader
          title="지역설정"
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
          {" "}
          <Typography color="textPrimary" gutterBottom variant="h7">
            {myAddressNm}
          </Typography>
        </CardContent>
      </Card>

      <FullScreenDialog
        isOpenDialog={isOpenDialog}
        setIsOpenDialog={setIsOpenDialog}
        title={"내 주소 설정"}
      >
        <AddressEdit
          setIsOpenDialog={setIsOpenDialog}
          loginUserInfo={props.loginUserInfo}
          setMyAddressNm={setMyAddressNm}
        />
      </FullScreenDialog>
    </Container>
  );
}
