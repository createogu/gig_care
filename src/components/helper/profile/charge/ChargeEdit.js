import * as React from "react";
import {
  Box,
  Button,
  Avatar,
  Chip,
  Stack,
  Paper,
  TextField,
} from "@mui/material";
import "./Charge.css";
import { useState, useEffect } from "react";
import SubWrap from "../../../../layout/subwrap/subWrap";
import InputAdornment from "@mui/material/InputAdornment";
import axios from "axios";
export default function ChargeEdit(props) {
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
    <SubWrap subTitle={"비용을 설정해주세요."}>
      <Stack container spacing={1.5}>
        <Box>
          <TextField
            label="최소 근무일수"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "20ch" }}
            type="number"
            value={minWorkDays}
            onChange={(e) => {
              setMinWorkDays(e.target.value);
            }}
            InputP
            InputProps={{
              endAdornment: <InputAdornment position="end">일</InputAdornment>,
            }}
          />
        </Box>
        <Box>
          <TextField
            label="일 단가"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "20ch" }}
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
            id="outlined-start-adornment"
            sx={{ m: 1, width: "20ch" }}
            value={downPaymentRate}
            type="number"
            helperText="100%를 초과 할 수 없습니다."
            onChange={(e) => {
              setDownPaymentRate(e.target.value);
            }}
            InputProps={{
              endAdornment: <InputAdornment position="end">%</InputAdornment>,
            }}
          />
        </Box>
        <Box>
          <TextField
            label="중도금"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "20ch" }}
            value={intermediatePaymentRate}
            type="number"
            onChange={(e) => {
              setIntermediatePaymentRate(e.target.value);
            }}
            InputProps={{
              endAdornment: <InputAdornment position="end">%</InputAdornment>,
            }}
          />
        </Box>
        <Box>
          <TextField
            label="잔금"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "20ch" }}
            value={remainderPaymentRate}
            type="number"
            onChange={(e) => {
              setRemainderPaymentRate(e.target.value);
            }}
            InputProps={{
              endAdornment: <InputAdornment position="end">%</InputAdornment>,
            }}
          />
        </Box>
        <Box>
          <TextField
            label="하자"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "20ch" }}
            value={defectPaymentRate}
            type="number"
            onChange={(e) => {
              setDefectPaymentRate(e.target.value);
            }}
            InputProps={{
              endAdornment: <InputAdornment position="end">%</InputAdornment>,
            }}
          />
        </Box>
      </Stack>

      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 1, mb: 2 }}
        onClick={saveMyCharge}
      >
        저장
      </Button>
    </SubWrap>
  );
}
