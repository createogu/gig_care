import * as React from "react";
import {
  Button,
  Avatar,
  Paper,
  TextField,
  Container,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function SearchFilter(props) {
  return (
    <Container maxWidth={"sm"}>
      <Typography variant="body1" whiteSpace={"pre-wrap"}></Typography>
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        검색
      </Button>
    </Container>
  );
}
