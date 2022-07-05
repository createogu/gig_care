import * as React from "react";
import { useState } from "react";
import MainWrap from "../../layout/mainwrap/mainWrap";
import SubHeader from "../../components/common/page-header/sub-header.js";
import SearchList from "../../components/consumer/search/SearchList.js";
import SearchBar from "../../components/consumer/search/SearchBar.js";

function HelperList(props) {
  const [isOpenSearchBar, setIsOpenSearchBar] = useState(false);
  return (
    <MainWrap>
      <SubHeader title={"도우미 검색화면"} />
      <SearchBar
        isOpenSearchBar={isOpenSearchBar}
        setIsOpenSearchBar={setIsOpenSearchBar}
      />
      <SearchList />
    </MainWrap>
  );
}

export default HelperList;
