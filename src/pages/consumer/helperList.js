import * as React from "react";
import MainWrap from "../../layout/mainwrap/mainWrap";
import PropTypes from "prop-types";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import SubHeader from "../../components/common/page-header/sub-header.js";
import SearchList from "../../components/consumer/search/SearchList.js";
import SearchBar from "../../components/consumer/search/SearchBar.js";
 
function HelperList(props) {
  return (
    <MainWrap>
      <SubHeader title={"도우미 검색화면"} />
      <SearchBar/>
      <SearchList />
      
    </MainWrap>
  );
}

export default HelperList;
