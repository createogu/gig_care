import * as React from "react";
import { Box, Typography, Paper } from "@mui/material";

export default function ChargeBar(props) {
  return (
    <Box
      component={Paper}
      sx={{
        display: "flex",
        flex: 1,
        flexDirection: "row",
      }}
    >
      {props.myCharge.downPaymentRate != 0 ? (
        <Box
          component="span"
          sx={{
            p: 1,
            flex: props.myCharge.downPaymentRate,
            backgroundColor: "yellow",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontSize: 11 }}
            align="center"
            color="black"
            fontWeight="bolder"
          >
            계약
          </Typography>
          <Typography
            sx={{ fontSize: 11 }}
            align="center"
            color="black"
            fontWeight="bolder"
          >
            {props.myCharge.downPaymentRate}
          </Typography>
        </Box>
      ) : null}
      {props.myCharge.intermediatePaymentRate != 0 ? (
        <Box
          sx={{
            p: 1,
            flex: props.myCharge.intermediatePaymentRate,
            backgroundColor: "lightGreen",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontSize: 11 }}
            align="center"
            color="black"
            fontWeight="bolder"
          >
            중도
          </Typography>
          <Typography
            sx={{ fontSize: 11 }}
            align="center"
            color="black"
            fontWeight="bolder"
          >
            {props.myCharge.intermediatePaymentRate}
          </Typography>
        </Box>
      ) : null}
      {props.myCharge.remainderPaymentRate != 0 ? (
        <Box
          sx={{
            p: 1,
            flex: props.myCharge.remainderPaymentRate,
            backgroundColor: "lightBlue",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontSize: 11 }}
            align="center"
            color="black"
            fontWeight="bolder"
          >
            잔금
          </Typography>
          <Typography
            sx={{ fontSize: 11 }}
            align="center"
            color="black"
            fontWeight="bolder"
          >
            {props.myCharge.remainderPaymentRate}
          </Typography>
        </Box>
      ) : null}
      {props.myCharge.defectPaymentRate != 0 ? (
        <Box
          sx={{
            p: 1,
            flex: props.myCharge.defectPaymentRate,
            backgroundColor: "lightcoral",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontSize: 11 }}
            align="center"
            color="black"
            fontWeight="bolder"
          >
            하자
          </Typography>
          <Typography
            sx={{ fontSize: 11 }}
            align="center"
            color="black"
            fontWeight="bolder"
          >
            {props.myCharge.defectPaymentRate}
          </Typography>
        </Box>
      ) : null}
    </Box>
  );
}
