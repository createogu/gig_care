import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();
export default function SignUp() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    axios.post(
      "http://localhost:8080/construct/user/signUp.do",
      {
        email: data.get("email"),
        name: data.get("name"),
        hp_no: data.get("hp_no"),
        year: data.get("year"),
        month: data.get("month"),
        day: data.get("day"),
        sex: data.get("sex"),
      }
      
    )
      
  };
  const userInfo = JSON.parse(window.localStorage.getItem("userInfo"));

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            회원가입
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  name="email"
                  required
                  fullWidth
                  id="email"
                  label="아이디"
                  value={userInfo.email}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="이름"
                  name="name"
                  value={userInfo.nickname}
                  helperText="반드시 본인의 실명을 입력해주세요"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="hp_no"
                  label="휴대전화"
                  id="hp_no"
                  helperText="숫자만 입력해주세요"
                />
              </Grid>              
              <Grid item xs={4}>
                <FormControl fullWidth size="small">
                  <InputLabel id="demo-simple-select-label">년도</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="year"
                    name="year"
                    label="년도"
                    required
                  >
                    <MenuItem value={1991}>1991</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl fullWidth size="small">
                  <InputLabel id="demo-simple-select-label">월</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="month"
                    name="month"
                    label="년도"
                    required
                  >
                    <MenuItem value={9}>9월</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl fullWidth size="small">
                  <InputLabel id="demo-simple-select-label">일</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="day"
                    name="day"
                    label="일"
                  >
                    <MenuItem value={29}>29일</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth size="small">
                  <InputLabel id="demo-simple-select-label">성별</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="sex"
                    name="sex"
                    label="성별"
                  >
                    <MenuItem value={"male"}>남자</MenuItem>
                    <MenuItem value={"female"}>여자</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
