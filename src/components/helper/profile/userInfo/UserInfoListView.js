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
import HelperChargeBar from "../../../../components/helper/profile/charge/ChargeBar.js";

export default function UserInfoCardView(props) {
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  let user = props.userInfo;
  if (user == null) {
    user = {
      userId: "createogu@gmail.com",
      userNm: "오민우",
      userAge: "30대",
      userGender: "남",
      addressNm: "세종특별시 대평동",
      hpNo: "010-7208-6332",
      minPeriod: 2,
      cost: 100000,
      payRateFirst: 10,
      payRateSecond: 30,
      payRateThird: 40,
      payRatefourth: 20,
      thumnailImg:
        "http://k.kakaocdn.net/dn/bbLJee/btrDoUvapgX/inrmBxgwKq9pwFITzTTx71/img_640x640.jpg",
    };
  }
  let ChargeData = {
    downPaymentRate: 10,
    intermediatePaymentRate: 20,
    remainderPaymentRate: 30,
    defectPaymentRate: 40,
  };

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
          sx={{
            width: "10vh",
            height: "10vh",
            padding: 1,
            borderRadius: 50,
            verticalAlign: "middle",
          }}
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
                  <Divider
                    sx={{ height: 18, pt: 0.5 }}
                    orientation="vertical"
                  />
                }
              >
                <Typography
                  sx={{ fontSize: 18 }}
                  color="primary"
                  fontWeight="bolder"
                >
                  {user.userNm}
                </Typography>
                <Typography sx={{ fontSize: 16 }} color="secondery">
                  {user.userGender}
                </Typography>
                <Typography sx={{ fontSize: 16 }} color="secondery">
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
            <Box sx={{ width: 300 }}>
              <HelperChargeBar myCharge={ChargeData} />
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
