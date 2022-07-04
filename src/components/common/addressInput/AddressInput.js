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
