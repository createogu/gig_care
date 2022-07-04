import * as React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Divider,
  Stack,
  Container,
  Typography,
} from "@mui/material";
import "./Career.css";
export default function CareerView() {
  return (
    <Container maxWidth={"sm"}>
      <Card variant="outlined">
        <CardHeader title="이력" />
        <Divider variant="middle" />
        <CardContent>
          <Stack
            justifyContent="center"
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={1}
          >
            <div> 29일 12시간</div>
          </Stack>
        </CardContent>
        <CardActions>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            수정
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}
