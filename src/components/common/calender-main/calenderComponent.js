import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import {
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Divider,
  Container,
  Typography,
} from "@mui/material";
import ArrowLeft from "@mui/icons-material/ArrowLeft";
import ArrowRight from "@mui/icons-material/ArrowRight";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
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
    console.log(weekStartDay);
  }, [month, year]);

  useEffect(() => {
    let copySelectedDateObjectArray = new Array();
    let _temp = new Date(year, month + 1, 0);
    for (let index = 0; index < _temp.getDate(); index++) {
      let date = new Date(year, month, index + 1);
      let tempObject = {
        date: date,
        workYn: false,
        holidayYn: date.getDay() == 0 || date.getDay() == 6 ? true : false,
      };
      copySelectedDateObjectArray.push(tempObject);
    }

    setSelectedDateObjectArray(copySelectedDateObjectArray);
    console.log(selectedDateObjectArray);
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

  return (
    <Container maxWidth={"sm"}>
      <Card variant="none">
        <CardHeader title="근무가능일" />
        <Divider variant="middle" />
        <CardContent>
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
              <Divider variant="middle" />
              {[...new Array(weekStartDay)].map((elem, i) => (
                <li key={i} className="date"></li>
              ))}
              {selectedDateObjectArray.map((elem, i) => (
                <li
                  key={i}
                  className="date"
                  onClick={() => {
                    let copySelectedDateObjectArray = [
                      ...selectedDateObjectArray,
                    ];
                    copySelectedDateObjectArray[i].workYn =
                      copySelectedDateObjectArray[i].workYn ? false : true;
                    setSelectedDateObjectArray(copySelectedDateObjectArray);

                    let workDayCnt = copySelectedDateObjectArray.filter(
                      (item) => item.workYn == true
                    ).length;
                    setSelectedDateCount(workDayCnt);
                  }}
                >
                  {elem.holidayYn ? (
                    <Typography variant="h6" style={{ color: "red" }}>
                      {elem.date.getDate()}
                    </Typography>
                  ) : (
                    <Typography variant="h6">{elem.date.getDate()}</Typography>
                  )}

                  {elem.workYn ? (
                    <Typography variant="h6" style={{ color: "red" }}>
                      {elem.date.getDate()} 
                    </Typography>
                  ) : (
                    <CheckBoxOutlineBlankIcon />
                  )}
                </li>
              ))}
            </ul>
          </Paper>
        </CardContent>
      </Card>
    </Container>
  );
}
