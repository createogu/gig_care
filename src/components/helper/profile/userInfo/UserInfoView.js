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
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";

export default function UserInfoView(props) {
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
    <Container maxWidth={"sm"}>
      <Card variant="none">
        <CardContent>
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
          </Box>
          <TableContainer component={Paper}>
            <Table sx={{}} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ width: "30%" }} align="center">
                    국적
                  </TableCell>
                  <TableCell sx={{ width: "30%" }} align="center">
                    나이
                  </TableCell>
                  <TableCell sx={{ width: "30%" }} align="center">
                    성별
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="center">대한민국</TableCell>
                  <TableCell align="center"> {user.age}</TableCell>
                  <TableCell align="center">
                    {user.genderCd == "1" ? <MaleIcon /> : <FemaleIcon />}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </Container>
  );
}
