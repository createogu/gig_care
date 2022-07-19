import * as React from "react";
import { Box, Button, Stack, Typography, TextField } from "@mui/material";
import "./Charge.css";
import { useState, useEffect } from "react";
import SubWrap from "../../../../layout/subwrap/subWrap";
import InputAdornment from "@mui/material/InputAdornment";
import axios from "axios";
export default function ChargeEdit(props) {
  const [isValidate, setIsValidate] = useState(false);
  const [validateText, setValidateText] = useState();
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [minWorkDays, setMinWorkDays] = useState(props.myCharge.minWorkDays);
  const [chargePerDay, setChargePerDay] = useState(props.myCharge.chargePerDay);
  const [downPaymentRate, setDownPaymentRate] = useState(
    props.myCharge.downPaymentRate
  );
  const [intermediatePaymentRate, setIntermediatePaymentRate] = useState(
    props.myCharge.intermediatePaymentRate
  );
  const [remainderPaymentRate, setRemainderPaymentRate] = useState(
    props.myCharge.remainderPaymentRate
  );
  const [defectPaymentRate, setDefectPaymentRate] = useState(
    props.myCharge.defectPaymentRate
  );

  function validateSumPercent() {
    let totalSum =
      downPaymentRate * 1 +
      intermediatePaymentRate * 1 +
      remainderPaymentRate * 1 +
      defectPaymentRate * 1;

    let validate = totalSum > 100 ? true : false;
    setIsValidate(validate);
    if (validate) {
      setValidateText("100%를 초과할 수 없습니다.");
    } else {
      setValidateText("");
    }
  }

  function saveMyCharge() {
    (async () => {
      try {
        const res = await axios.post(
          process.env.REACT_APP_BACK_BASE_URL + "/helper/modifyCharge.do",
          {
            userId: 8,
            minWorkDays: minWorkDays,
            chargePerDay: chargePerDay,
            downPaymentRate: downPaymentRate,
            intermediatePaymentRate: intermediatePaymentRate,
            remainderPaymentRate: remainderPaymentRate,
            defectPaymentRate: defectPaymentRate,
          }
        );

        let rtnMsg = res.data.rtnMsg;
        if (rtnMsg) {
          props.setIsOpenDialog(false);
        }
      } catch (e) {
        console.error(e);
      }
    })();
  }

  return (
    <Box sx={{ p: 2 }}>
      <Stack container spacing={1.5}>
        <Box>
          <TextField
            label="최소 근무일수"
            fullWidth
            sx={{ mb: 1, mt: 1 }}
            type="number"
            value={minWorkDays}
            onChange={(e) => {
              setMinWorkDays(e.target.value);
            }}
            InputProps={{
              endAdornment: <InputAdornment position="end">일</InputAdornment>,
            }}
          />
        </Box>
        <Box>
          <TextField
            label="일 단가"
            fullWidth
            sx={{ mb: 1, mt: 1 }}
            value={chargePerDay}
            type="number"
            onChange={(e) => {
              setChargePerDay(e.target.value);
            }}
            InputProps={{
              endAdornment: <InputAdornment position="end">원</InputAdornment>,
            }}
          />
        </Box>
        <Box>
          <TextField
            label="계약금"
            fullWidth
            sx={{ mb: 1, mt: 1 }}
            value={downPaymentRate}
            type="number"
            onChange={(e) => {
              setDownPaymentRate(e.target.value);
            }}
            onKeyUp={(e) => {
              validateSumPercent();
            }}
            onBlur={(e) => {
              validateSumPercent();
            }}
            InputProps={{
              endAdornment: <InputAdornment position="end">%</InputAdornment>,
            }}
          />
        </Box>
        <Box>
          <TextField
            label="중도금"
            fullWidth
            sx={{ mb: 1, mt: 1 }}
            value={intermediatePaymentRate}
            type="number"
            onChange={(e) => {
              setIntermediatePaymentRate(e.target.value);
            }}
            onKeyUp={(e) => {
              validateSumPercent();
            }}
            onBlur={(e) => {
              validateSumPercent();
            }}
            InputProps={{
              endAdornment: <InputAdornment position="end">%</InputAdornment>,
            }}
          />
        </Box>
        <Box>
          <TextField
            label="잔금"
            fullWidth
            sx={{ mb: 1, mt: 1 }}
            value={remainderPaymentRate}
            type="number"
            onChange={(e) => {
              setRemainderPaymentRate(e.target.value);
            }}
            onKeyUp={(e) => {
              validateSumPercent();
            }}
            onBlur={(e) => {
              validateSumPercent();
            }}
            InputProps={{
              endAdornment: <InputAdornment position="end">%</InputAdornment>,
            }}
          />
        </Box>
        <Box>
          <TextField
            label="하자"
            fullWidth
            sx={{ mb: 1, mt: 1 }}
            value={defectPaymentRate}
            type="number"
            onChange={(e) => {
              setDefectPaymentRate(e.target.value);
            }}
            onKeyUp={(e) => {
              validateSumPercent();
            }}
            onBlur={(e) => {
              validateSumPercent();
            }}
            InputProps={{
              endAdornment: <InputAdornment position="end">%</InputAdornment>,
            }}
          />
        </Box>
      </Stack>

      <Typography variant={"body2"} sx={{ textAlign: "right", color: "red" }}>
        {validateText}
      </Typography>
      <Button
        type="submit"
        disabled={isValidate}
        fullWidth
        variant="contained"
        sx={{ mt: 1, mb: 2 }}
        onClick={saveMyCharge}
      >
        저장
      </Button>
    </Box>
  );
}
