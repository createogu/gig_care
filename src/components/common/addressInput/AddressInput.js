import {
  Box,
  Button,
  Divider,
  Paper,
  Typography,
  TextField,
} from "@mui/material";
import { useState, useEffect } from "react";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import * as common from "../../../util/common.js";
import axios from "axios";

const filter = createFilterOptions();
export default function AddressInput(props) {
  let p_location = null;

  p_location = common.getLocation();

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

        // let rtnData = res.data;
        // if (rtnData != null) {
        //   setAddressList(rtnData.addressList);
        // }else{
          let tempAddressList = [
            {addressMngNo : "3020052000", addressNm : "대전광역시 유성구 진잠동"},
            {addressMngNo : "3020052600"	, addressNm : "대전광역시 유성구 학하동"},
            {addressMngNo : "3020052700"	, addressNm : "대전광역시 유성구 상대동"},
            {addressMngNo : "3020053000"	, addressNm : "대전광역시 유성구 온천1동"},
            {addressMngNo : "3020054000"	, addressNm : "대전광역시 유성구 온천2동"},
            {addressMngNo : "3020054600"	, addressNm : "대전광역시 유성구 노은1동"},
            {addressMngNo : "3020054700"	, addressNm : "대전광역시 유성구 노은2동"},
            {addressMngNo : "3020054800"	, addressNm : "대전광역시 유성구 노은3동"},
            {addressMngNo : "3020055000"	, addressNm : "대전광역시 유성구 신성동"},
            {addressMngNo : "3020057000"	, addressNm : "대전광역시 유성구 전민동"},
            {addressMngNo : "3020058000"	, addressNm : "대전광역시 유성구 구즉동"},
            {addressMngNo : "3020060000"	, addressNm : "대전광역시 유성구 관평동"}
          ]
          setAddressList(tempAddressList)
        // }
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <Box>
      <Autocomplete
        value={props.addressNm}
        onChange={(event, newValue) => {
          console.log(newValue);
          if (typeof newValue === "string") {
            props.setAddressNm(newValue.addressNm);
            props.setaddressMngNo(newValue.addressMngNo);
          } else if (newValue && newValue.inputValue) {
            props.setAddressNm(newValue.addressNm);
            props.setaddressMngNo(newValue.addressMngNo);
          } else {
            props.setAddressNm(newValue.addressNm);
            props.setaddressMngNo(newValue.addressMngNo);
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
    </Box>
  );
}
