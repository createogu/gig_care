import { Box, Typography, Button } from "@mui/material";
import Container from "@mui/material/Container";
import FullScreenDialog from "../../moodules/fullScreenDialog/fullScreenDialog";
import ProfileUserAdressEdit from "./profileUserAdressEdit";
import { useState } from "react";

export default function ProfileUserAdress(props) {
  let user = props.loginUserInfo;
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [myAdress, setMyAdress] = useState();
  function openEditDialog() {
    setIsOpenDialog(true);
  }

  return (
    <div>
      <Container>
        <Typography color="textPrimary" gutterBottom variant="h5">
          {user.userNm}
        </Typography>
      </Container>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={openEditDialog}
      >
        수정
      </Button>
      <FullScreenDialog
        isOpenDialog={isOpenDialog}
        setIsOpenDialog={setIsOpenDialog}
        title={"내 주소 설정"}
      >
        <ProfileUserAdressEdit
          setIsOpenDialog={setIsOpenDialog}
          loginUserInfo={props.loginUserInfo}
          myAdress={myAdress}
          setMyAdress={setMyAdress}
        />
      </FullScreenDialog>
    </div>
  );
}
