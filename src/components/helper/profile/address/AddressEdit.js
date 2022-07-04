import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import SubWrap from "../../../../layout/subwrap/subWrap";
import Stack from "@mui/material/Stack";
import AddressInput from "../../../common/addressInput/AddressInput.js";
import axios from "axios";

export default function AddressEdit(props) {
  const [addressNm, setAddressNm] = useState("");
  const [addressMngNo, setaddressMngNo] = useState("");

  return (
    <SubWrap subTitle={"읍면동 단위로 주소를 검색해주세요"}>
      <AddressInput
        setAddressNm={setAddressNm}
        setaddressMngNo={setaddressMngNo}
      />
      <Divider />
      <Stack justifyContent="center" direction="column" spacing={2}>
        <Paper
          variant="outlined"
          square
          elevation={2}
          onClick={() => {
            setAddressNm("11111");
            setaddressMngNo("22222");
          }}
        >
          서울특별시 종로구 청운효자동
        </Paper>
      </Stack>
      {addressNm}
      {addressMngNo}
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={() => {
          (async () => {
            try {
              const res = await axios.post(
                `http://localhost:8080/construct/user/modify.do`,
                {
                  userId: props.loginUserInfo.userId,
                  addressCd: addressMngNo,
                }
              );
            } catch (e) {
              console.error(e);
            }
          })();
        }}
      >
        저장
      </Button>
    </SubWrap>
  );
}
