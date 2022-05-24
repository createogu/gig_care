import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import loginUserInfo from "../../data/loginUserInfo";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { Paper } from "@mui/material";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      Gig-간병
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function LoginModal(props) {
  let navigate = useNavigate();

  const tryLogin = (event) => {
    event.preventDefault();
    const email = document.getElementsByName("email")[0].value;
    const password = document.getElementsByName("password")[0].value;
    if (!email.length > 0) {
      alert("이메일이 입력되지 않았습니다.");
      return false;
    } else if (!password.length > 0) {
      alert("비밀번호가 입력되지 않았습니다.");
      return false;
    } else {
      props.setLoginUserInfo({ loginUserInfo });
      props.setIsModalOpen(false);
      navigate("/" + props.selectedMenuCode);
    }
  };

  return (
    <div>
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
            <Box component="form" onSubmit={tryLogin} noValidate sx={{ mt: 1 }}>
              <TextField
                className="inputedData"
                margin="normal"
                required
                fullWidth
                id="email"
                label="이메일"
                name="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="비밀번호"
                type="password"
                id="password"
              />
              {/* 체크 하고 로그인하면 웹스토리지에 사용자 정보 저장 */}
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="로그인 상태 유지"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={tryLogin}
              >
                로그인
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    비밀번호 찾기
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"회원가입"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </div>
  );
}
