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
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import FullScreenDialog from "../../../../moodules/fullScreenDialog/fullScreenDialog.js";
import HelperDetail from "../../../../pages/consumer/helperDetail.js";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.body}`]: {
    backgroundColor: "red",
    color: theme.palette.common.white,
    fontSize: 14,
  },
}));

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
      thumnailImg: "",
    };
  }

  return (
    <Container maxWidth={"sm"}>
      <Card
        variant="outlined"
        onClick={() => {
          setIsOpenDialog(true);
        }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
            {user.userNm} / {user.userGender} / {user.userAge} <ThumbUpIcon />{" "}
            4.0
          </Typography>
          <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
            {user.addressNm}
          </Typography>
          <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
            최소기간 : {user.minPeriod}일 / 비용 : {user.cost} 원
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{}} aria-label="simple table">
              <TableBody>
                <TableRow>
                  <TableCell
                    sx={{
                      width: "20%",
                      backgroundColor: "red",
                      color: "white",
                      fontSize: 12,
                    }}
                    align="center"
                  >
                    착수(20%)
                  </TableCell>
                  <TableCell
                    sx={{
                      width: "40%",
                      backgroundColor: "blue",
                      color: "white",
                      fontSize: 12,
                    }}
                    align="center"
                  >
                    중도(40%)
                  </TableCell>
                  <TableCell
                    sx={{
                      width: "30%",
                      backgroundColor: "orange",
                      color: "white",
                      fontSize: 12,
                    }}
                    align="center"
                  >
                    잔금(30%)
                  </TableCell>
                  <TableCell
                    sx={{
                      width: "10%",
                      backgroundColor: "green",
                      color: "white",
                      fontSize: 12,
                    }}
                    align="center"
                  >
                    하자(10%)
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
        {/* <CardActions>
        <Button size="small">상세보기</Button>
        <Button size="small">후기보기(13)</Button>
      </CardActions> */}
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
