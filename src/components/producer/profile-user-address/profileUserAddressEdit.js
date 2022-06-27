import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import SubWrap from "../../../layout/subwrap/subWrap";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import * as common from "../../../util/common";
import axios from "axios";

const filter = createFilterOptions();
export default function ProfileUserAddressEdit(props) {
  let p_location = null;

  p_location = common.getLocation();

  const [addressNm, setAddressNm] = useState("");
  const [addressMngNo, setaddressMngNo] = useState("");
  const [addressList, setAddressList] = useState([{}]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.post(
          `http://localhost:8080/construct/common/getAddressList.do`,
          {
            lat: "127.27953",
            long: "36.47127",
          }
        );

        let rtnData = res.data;
        if (rtnData != null) {
          setAddressList(rtnData.addressList);
        }
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <SubWrap subTitle={"읍면동 단위로 주소를 검색해주세요"}>
      <Autocomplete
        value={addressNm}
        onChange={(event, newValue) => {
          console.log(newValue);
          if (typeof newValue === "string") {
            setAddressNm(newValue.addressNm);
            setaddressMngNo(newValue.addressMngNo);
          } else if (newValue && newValue.inputValue) {
            setAddressNm(newValue.addressNm);
            setaddressMngNo(newValue.addressMngNo);
          } else {
            setAddressNm(newValue.addressNm);
            setaddressMngNo(newValue.addressMngNo);
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          const { inputValue } = params;
          const isExisting = options.some(
            (option) => inputValue === option.title
          );
          if (inputValue !== "" && !isExisting) {
            filtered.push({
              inputValue,
              title: `Add "${inputValue}"`,
            });
          }

          return filtered;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        id="free-solo-with-text-demo"
        options={addressList}
        getOptionLabel={(option) => {
          // Value selected with enter, right from the input
          if (typeof option === "string") {
            return option;
          }
          // Add "xxx" option created dynamically
          if (option.inputValue) {
            return option.addressMngNo;
          }
          // Regular option
          return option.addressNm;
        }}
        renderOption={(props, option) => <li {...props}>{option.addressNm}</li>}
        sx={{ width: "100%" }}
        freeSolo
        renderInput={(params) => <TextField {...params} />}
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
