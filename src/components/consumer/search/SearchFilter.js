import * as React from "react";
import { useState } from "react";
import {
  Box,
  Button,
  Stack,
  TextField,
  Grid,
  Paper,
  Divider,
  Container,
  Typography,
} from "@mui/material";

import Modal from "@mui/material/Modal";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import AddressInput from "../../common/addressInput/AddressInput.js";
import DateRangeInput from "../../common/dateRangePicker/dateRangePicker.js";
import { addDays } from "date-fns";
import { width } from "@mui/system";
import moment from "moment";
import "moment/locale/ko";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function SearchFilter(props) {
  const [isDatePickerModalOpen, setIsDatePickerModalOpen] = useState(false);
  const [dateState, setDateState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  const [srtDate, setSrtDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [addressNm, setAddressNm] = useState("");
  const [addressMngNo, setaddressMngNo] = useState("");
  const [careType, setCareType] = useState("");
  const [gender, setGender] = useState("");

  function setKoDate() {
    setSrtDate(moment(dateState[0].startDate).format("YYYY년 MM월 DD일"));
    setEndDate(moment(dateState[0].endDate).format("YYYY년 MM월 DD일"));
    setIsDatePickerModalOpen(false);
  }

  return (
    <Container maxWidth={"sm"}>
      <Stack alignItems="left" direction={"column"} spacing={1}>
        {/* <FormLabel id="demo-row-radio-buttons-group-label">돌봄대상</FormLabel>
        <Box>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="careType"
            onChange={(e) => {
              setCareType(e.target.value);
            }}
          >
            <FormControlLabel
              value="01"
              checked={true}
              control={<Radio />}
              label="환자"
            />
            <FormControlLabel value="02" control={<Radio />} label="애완동물" />
            <FormControlLabel value="03" control={<Radio />} label="가사" />
            <FormControlLabel value="04" control={<Radio />} label="육아" />
          </RadioGroup>
        </Box> */}
        <FormLabel id="demo-row-radio-buttons-group-label">지역</FormLabel>
        <Box>
          <AddressInput
            setAddressNm={setAddressNm}
            setaddressMngNo={setaddressMngNo}
          />
        </Box>
        <FormLabel id="demo-row-radio-buttons-group-label">필요기간</FormLabel>
        <Box>
          <TextField
            id="outlined-read-only-input"
            label="시작일"
            value={srtDate}
            fullWidth
            InputProps={{
              readOnly: true,
            }}
            onClick={() => {
              setIsDatePickerModalOpen(true);
            }}
          />
        </Box>
        <Box>
          <TextField
            id="outlined-read-only-input"
            label="종료일"
            value={endDate}
            fullWidth
            InputProps={{
              readOnly: true,
            }}
            onClick={() => {
              setIsDatePickerModalOpen(true);
            }}
          />
        </Box>
        <FormLabel id="demo-row-radio-buttons-group-label">성별</FormLabel>
        <Box>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="gender"
            onChange={(e) => {
              setGender(e.target.value);
            }}
          >
            <FormControlLabel value="01" control={<Radio />} label="남자" />
            <FormControlLabel value="02" control={<Radio />} label="여자" />
          </RadioGroup>
        </Box>
      </Stack>
      <Box>
        {/* <Button variant="outlined">초기화</Button> */}
        <Button
          variant="contained"
          fullWidth
          onClick={() => {
            props.setIsOpenSearchBar(false);
          }}
        >
          적용하기
        </Button>
      </Box>

      {isDatePickerModalOpen ? (
        <Modal
          open={() => {
            setIsDatePickerModalOpen(true);
          }}
          onClose={() => {
            setIsDatePickerModalOpen(false);
          }}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <DateRangeInput dateState={dateState} setDateState={setDateState} />
            <Button
              variant="contained"
              sx={{ position: "fixed", bottom: 5, left: 5, right: 5 }}
              onClick={() => {
                setKoDate();
              }}
            >
              적용하기
            </Button>
          </Box>
        </Modal>
      ) : null}
    </Container>
  );
}
