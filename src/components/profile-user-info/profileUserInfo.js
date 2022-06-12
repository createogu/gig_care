import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";

export default function ProfileUserInfo(props) {
  let user = props.loginUserInfo;
  
  if (user == null) {
    user = {
      userId: "createogu@gmail.com",
      userNm: "오민우",
      hpNo: "010-7208-6332",
      thumnailImg: "",
    };
  }

  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Avatar
        src={user.thumnailImgUrl}
        sx={{
          height: 128,
          mb: 2,
          width: 128,
        }}
      />
      <Typography color="textPrimary" gutterBottom variant="h5">
        {user.userNm}
      </Typography>
      <Typography color="textSecondary" variant="h8"  marginBottom={1}>
        {user.genderCd}
      </Typography>
      <Typography color="textSecondary" variant="h8">
        {user.age}
      </Typography>
    </Box>
  );
}
