import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import ko from "date-fns/locale/ko"; // 날짜 포맷 라이브러리 (한국어 기능을 임포트)
import { DateRange } from "react-date-range";
import { addDays } from "date-fns";
import { useState } from "react";

export default function DateRangeInput(props) {


  function selectDate(item){
    console.log(item[0].startDate)
    props.setDateState(item)
  }

  return (
    <div>
      <DateRange
        onChange={(item) => selectDate([item.selection])}
        locale={ko}
        dateDisplayFormat={"yyyy.MM.dd"} // 날짜 포맷값
        showDateDisplay={false}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={false}
        ranges={props.dateState}
        direction="vertical"
      />
    </div>
  );
}
