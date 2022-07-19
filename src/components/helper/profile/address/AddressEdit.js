import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import SubWrap from "../../../../layout/subwrap/subWrap";
import Stack from "@mui/material/Stack";
import AddressInput from "../../../common/addressInput/AddressInput.js";
import axios from "axios";

export default function AddressEdit(props) {
  const [addressNm, setAddressNm] = useState("");
  const [addressMngNo, setaddressMngNo] = useState("");
  useEffect(() => {
    if (addressMngNo.length > 0) {
      (async () => {
        try {
          const res = await axios.post(
            process.env.REACT_APP_BACK_BASE_URL + "/construct/user/modify.do",
            {
              userId: props.helperInfo.userId,
              addressMngNo: addressMngNo,
            }
          );
          props.setMyAddressNm(addressNm)
          props.setIsOpenDialog(false);
        } catch (e) {
          console.error(e);
        }
      })();
    }
  }, [addressMngNo]);
  return (
    <Box>
      <AddressInput
        setAddressNm={setAddressNm}
        setaddressMngNo={setaddressMngNo}
      />
    </Box>
  );
}
