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
  Rating,
  Typography,
} from "@mui/material";
import "./Career.css";
export default function CareerView(props) {
  return (
    <Container maxWidth={"sm"}>
      <Card variant="none">
        <CardHeader title="후기보기" />
        <Divider variant="middle" />
        <CardContent>
          <Stack
            justifyContent="center"
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={1}
          >
            <Rating defaultValue={2} />(3)
          </Stack>
        </CardContent>
        {props.isEditable ? (
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
        ) : null}
      </Card>
    </Container>
  );
}
