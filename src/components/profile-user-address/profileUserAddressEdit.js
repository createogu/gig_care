import { Box, Button, Divider, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import SubWrap from "../../layout/subwrap/subWrap";
import TextField from "@mui/material/TextField";
import * as common from "../../common/util/common";
import axios from "axios";

const filter = createFilterOptions();
export default function ProfileUserAddressEdit(props) {
  let p_location = null;

  p_location = common.getLocation();
  const [addressNm, setAddressNm] = useState("");
  const [addressList, setAddressList] = useState([{}]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.post(
          `http://construct.agig.co.kr/construct/common/getAddressList.do`
        );

        let rtnData = res.data;
        console.log(rtnData.addressList);
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
          if (typeof newValue === "string") {
            setAddressNm({
              title: newValue,
            });
          } else if (newValue && newValue.inputValue) {
            // Create a new value from the user input
            setAddressNm({
              title: newValue.inputValue,
            });
          } else {
            setAddressNm(newValue);
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
            return option.adressMngNo;
          }
          // Regular option
          return option.adressNm;
        }}
        renderOption={(props, option) => <li {...props}>{option.adressNm}</li>}
        sx={{ width: "100%" }}
        freeSolo
        renderInput={(params) => (
          <TextField {...params}  />
        )}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={() => {
          
        }}
      >
        저장
      </Button>      
    </SubWrap>
  );
}
