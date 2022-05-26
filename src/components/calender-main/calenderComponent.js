import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ArrowLeft from "@mui/icons-material/ArrowLeft";
import ArrowRight from "@mui/icons-material/ArrowRight";
import "./calenderComponent.css";

export default function CalenderComponent() {
  const [weekStartDay, setWeekStartDay] = useState();
  const [date, setDate] = useState(new Date());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [daysInMonth, setDaysInMonth] = useState(new Date(year, month + 1, 0));
  const [selectedDateCount, setSelectedDateCount] = useState(0);
  const [selectedDateObjectArray, setSelectedDateObjectArray] = useState([]);
  useEffect(() => {
    let _temp = new Date(year, month + 1, 0);
    setDaysInMonth(_temp.getDate());
    setYear(_temp.getFullYear());
  }, [month, year]);

  useEffect(() => {
    let _temp = new Date(year, month, 1);
    setWeekStartDay(_temp.getDay());
  }, [month, year]);

  const monthName = () => {
    let _date = new Date(year, month + 1, 0);
    let _monthName = _date.toLocaleString("default", { month: "long" });
    return _monthName;
  };

  const onLeftArrowClick = () => {
    if (month === 0) setYear(year - 1);
    setMonth((month + 12 - 1) % 12);
  };
  const onRightArrowClick = () => {
    if (month === 11) setYear(year + 1);
    setMonth((month + 12 + 1) % 12);
  };

  // 날짜 누르면 선택
  // 다시 누르면 취소
  const handleDateSelection = (e) => {
    let _date = parseInt(e.target.textContent);
    let selectedDate = new Date(year, month, _date);
    let includeNum = -1;
    let copyArray = [...selectedDateObjectArray];

    for (let index = 0; index < selectedDateObjectArray.length; index++) {
      if (selectedDateObjectArray[index].getTime() == selectedDate.getTime()) {
        includeNum = index;
      }
    }

    if (includeNum < 0) {
      copyArray.push(selectedDate);
      setSelectedDateObjectArray(copyArray);
      e.target.className = "date graySelected";
    } else {
      copyArray.splice(includeNum, 1);
      setSelectedDateObjectArray(copyArray);
      e.target.className = "date";
    }

    let arrayCount = copyArray.length;
    console.log(copyArray);
    setSelectedDateCount(arrayCount);
  };

  return (
    <div>
      선택된 근무 일수 : {selectedDateCount}
      <Paper elevation={10} className="calender">
        <div className="calenderTitle">
          <IconButton
            size="small"
            className="arrowIcon"
            onClick={onLeftArrowClick}
          >
            <ArrowLeft />
          </IconButton>
          <h2 style={{ textAlign: "center" }}>
            {year} {monthName()}
          </h2>
          <IconButton
            size="small"
            className="arrowIcon"
            onClick={onRightArrowClick}
          >
            <ArrowRight />
          </IconButton>
        </div>
        <ul className="weekDays">
          {["일", "월", "화", "수", "목", "금", "토"].map((day, i) => (
            <li className="date" key={i}>
              <Typography variant="h5">{day.toUpperCase()}</Typography>
            </li>
          ))}
          {[...new Array(weekStartDay)].map((elem, i) => (
            <li key={i} className="date"></li>
          ))}
          {[...new Array(daysInMonth)].map((elem, i) => (
            <li key={i} className="date" onClick={handleDateSelection}>
              <Typography variant="h6" >
                {i + 1}
              </Typography>
            </li>
          ))}
        </ul>
      </Paper>
    </div>
  );
}
