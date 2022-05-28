import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography
} from '@mui/material';


export default function ProfileUserInfo(props) {
  let user = props.loginUserInfo.loginUserInfo[0];
  console.log(user);
  if (user == null) {
    user = {
      userId: "createogu@gmail.com",
      userName: "오민우",
      hpNO: "010-7208-6332",
      thumnailImg: "",
    }
  }



  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Avatar
        src={user.avatar}
        sx={{
          height: 64,
          mb: 2,
          width: 64
        }}
      />
      <Typography
        color="textPrimary"
        gutterBottom
        variant="h5"
      >
        {user.userName}
      </Typography>
      <Typography
        color="textSecondary"
        variant="body2"
      >
        {user.hpNO}
      </Typography>
      <Typography
        color="textSecondary"
        variant="body2"
      >
        {user.userId}
      </Typography>
    </Box>
  )
};
