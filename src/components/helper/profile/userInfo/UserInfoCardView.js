import {
  Avatar,
  Box,
  Stack,
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

export default function UserInfoCardView(props) {
  let helperInfo = props.helperInfo;

  return (
    <Box
      sx={{
        p: 5,
        width: "100%",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(180deg, #61c9a8 35%, #ffffff 35%)",
      }}
    >
      <Avatar
        src={helperInfo.thumnailImgUrl}
        sx={{
          border: "15px solid #eee",
          height: 160,
          mb: 2,
          width: 160,
        }}
      />
      <Box>
        <Stack
          alignItems="left"
          direction={"row"}
          spacing={1}
          divider={<Divider variant="middle" orientation="vertical" flexItem />}
        >
          <Typography sx={{ fontSize: 24 }} color="primary" fontWeight="bolder">
            {helperInfo.userNm}
          </Typography>
          <Typography sx={{ fontSize: 16, pt: 0.7 }} color="secondery">
            {helperInfo.genderCd}
          </Typography>
          <Typography sx={{ fontSize: 16, pt: 0.7 }} color="secondery">
            {helperInfo.age}
          </Typography>
        </Stack>
      </Box>
      <Box>
        <Stack alignItems="center" direction={"column"} spacing={0}>
          <Typography
            sx={{ fontSize: 16, fontWeight: "bolder" }}
            color="text.secondary"
          >
            {helperInfo.addressNm}
          </Typography>
          <Typography
            sx={{ fontSize: 16, fontWeight: "bolder" }}
            color="text.secondary"
          >
            최소기간 : {helperInfo.minPeriod}일
          </Typography>
          <Typography
            sx={{ fontSize: 16, fontWeight: "bolder" }}
            color="text.secondary"
          >
            비용 : {helperInfo.cost} 원
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}
