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
import { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import Confirm from "../../../moodules/comfirm/confirm";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

const style = {};

export default function DetailFooter(props) {
  let navigate = useNavigate();

  return (
    <Container
      maxWidth="sm"
      sx={{ position: "fixed", bottom: 5, left: 5, right: 5 }}
      elevation={3}
    >
      <BottomNavigation>
        <Button variant="contained" disableElevation fullWidth>
          계약하기
        </Button>
      </BottomNavigation>
    </Container>
  );
}
