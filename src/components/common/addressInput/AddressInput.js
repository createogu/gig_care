import {
  Box,
  Button,
  Divider,
  Paper,
  InputBase,
  IconButton,
  Typography,
  TextField,
} from "@mui/material";
import { useState, useEffect } from "react";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import SearchIcon from "@mui/icons-material/Search";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import useWatchLocation from "../../../utils/hooks/useCurrentLocation.js";
import axios from "axios";
const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 60 * 1, // 1 min (1000 ms * 60 sec * 1 minute = 60 000ms)
  maximumAge: 1000 * 3600 * 24, // 24 hour
};
export default function AddressInput(props) {
  const [searchType, setSearchType] = useState();
  const [addressList, setAddressList] = useState([{}]);
  const [searchAddressNm, setSearchAddressNm] = useState();
  const [validateText, setValidateText] = useState();
  const { location } = useWatchLocation(geolocationOptions);
  const timer = null;

  return (
    <Paper elevation={2}>
      <IconButton type="submit" sx={{ p: 2 }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, mb: 2, width: "calc(100vw - 90px)" }}
        placeholder="동,읍,면으로 주소를 검색해주세요."
        onKeyUp={(e) => {
          if (e.target.value.length < 1) {
            setAddressList("");
            setValidateText("검색어를 입력해주세요.");
          } else {
            setValidateText("");
            if (e.key == "Enter") {
              (async () => {
                try {
                  console.log(searchAddressNm);
                  const res = await axios.post(
                    process.env.REACT_APP_BACK_BASE_URL +
                      "/construct/common/getSearchTextBaseAddressList.do",
                    {
                      address_nm: e.target.value,
                    }
                  );

                  let rtnData = res.data;
                  if (rtnData != null) {
                    setSearchAddressNm(e.target.value);
                    setSearchType("searchAdressNm");
                    setAddressList(rtnData.commAddressList);
                  }
                } catch (e) {
                  console.error(e);
                }
              })();
            }
          }
        }}
      />
      <Box>
        <Typography variant={"body2"} sx={{ textAlign: "right", color: "red" }}>
          {validateText}
        </Typography>
      </Box>
      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{ mb: 2 }}
        onClick={() => {
          (async () => {
            try {
              console.log(location);
              const res = await axios.post(
                process.env.REACT_APP_BACK_BASE_URL +
                  "/construct/common/getGpsBaseAddressList.do",
                {
                  lat: location.latitude,
                  long: location.longitude,
                }
              );

              let rtnData = res.data;
              if (rtnData != null) {
                setSearchType("gps");
                setAddressList(rtnData.commAddressList);
              }
            } catch (e) {
              console.error(e);
            }
          })();
        }}
      >
        <LocationSearchingIcon />
        <Typography sx={{ fontSize: 14, pl: 1 }}>현재 위치로 찾기</Typography>
      </Button>
      {addressList.length > 0 ? (
        <Box>
          {searchType == "gps" ? (
            <Typography sx={{ fontSize: 14, pl: 2, pb: 2 }} color="black">
              현 위치 주변
            </Typography>
          ) : (
            <Typography sx={{ fontSize: 14, pl: 2, pb: 2 }} color="black">
              '{searchAddressNm}' 검색결과
            </Typography>
          )}
          {addressList.map((item, index) => {
            return (
              <Box sx={{ p: 1, pl: 2 }}>
                <Typography
                  sx={{ fontSize: 16, pb: 1 }}
                  color="black"
                  onClick={() => {
                    props.setAddressNm(item.addressNm);
                    props.setaddressMngNo(item.addressMngNo);
                  }}
                >
                  {item.addressNm}
                </Typography>
                <Divider />
              </Box>
            );
          })}
        </Box>
      ) : (
        <Box sx={{ p: 1, pl: 2 }}>
          <Typography sx={{ fontSize: 16, pb: 1 }} color="black">
            검색 결과가 없습니다.
          </Typography>
          <Divider />
        </Box>
      )}
    </Paper>
  );
}
