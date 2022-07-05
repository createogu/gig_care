import {
  Avatar,
  Box,
  Stack,
  Card,
  CardHeader,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Rating,
  Container,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { styled } from "@mui/material/styles";

import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";

import FullScreenDialog from "../../../../moodules/fullScreenDialog/fullScreenDialog.js";
import HelperDetail from "../../../../pages/consumer/helperDetail.js";

export default function UserInfoCardView(props) {
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  let user = props.userInfo;
  if (user == null) {
    user = {
      userId: "createogu@gmail.com",
      userNm: "오민우",
      userAge: 32,
      userGender: "남",
      addressNm: "세종특별시 대평동",
      hpNo: "010-7208-6332",
      minPeriod: 2,
      cost: 100000,
      payRateFirst: 10,
      payRateSecond: 30,
      payRateThird: 40,
      payRatefourth: 20,
      thumnailImg: "http://k.kakaocdn.net/dn/bbLJee/btrDoUvapgX/inrmBxgwKq9pwFITzTTx71/img_640x640.jpg",
    };
  }

  return (
    <Container maxWidth={"sm"}>
      <Card
        sx={{ display: "flex", padding: "5pt" }}
        variant="outlined"
        onClick={() => {
          setIsOpenDialog(true);
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: 100, padding: 1, borderRadius: 50 }}
          image={user.thumnailImg}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Box>
              <Stack
                alignItems="left"
                direction={"row"}
                spacing={1}
                divider={
                  <Divider variant="middle" orientation="vertical" flexItem />
                }
              >
                <Typography
                  sx={{ fontSize: 18 }}
                  color="primary"
                  fontWeight="bolder"
                >
                  {user.userNm}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="secondery">
                  {user.userGender}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="secondery">
                  {user.userAge}
                </Typography>
              </Stack>
            </Box>
            <Typography sx={{ fontSize: 14 }} color="text.secondary">
              {user.addressNm}
            </Typography>
            <Box>
              <Stack
                alignItems="left"
                direction={"row"}
                spacing={1}
                divider={
                  <Divider variant="middle" orientation="vertical" flexItem />
                }
              >
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                  최소기간 : {user.minPeriod}일
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                  비용 : {user.cost} 원
                </Typography>
              </Stack>
            </Box>
          </CardContent>
        </Box>
      </Card>
      <FullScreenDialog
        isOpenDialog={isOpenDialog}
        setIsOpenDialog={setIsOpenDialog}
        title={"도우미 상세화면"}
      >
        <HelperDetail />
      </FullScreenDialog>
    </Container>
  );
}
