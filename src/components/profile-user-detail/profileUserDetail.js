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

export default function ProfileUserDetail(props) {
  let user = props.loginUserInfo;
  console.log(user);
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
        src={user.avatar}
        sx={{
          height: 64,
          mb: 2,
          width: 64,
        }}
      />
      <Typography color="textPrimary" gutterBottom variant="h5">
        {user.userNm}
      </Typography>
      <Typography color="textSecondary" variant="h8"  marginBottom={1}>
        {user.userId}
      </Typography>
      <Typography color="textSecondary" variant="h8">
        {user.hpNo}
      </Typography>
    </Box>
  );
}
