import * as React from "react";
import { Button, Avatar, Chip, Stack, Paper } from "@mui/material";
import "./Charge.css";
import CommChargeList from "../../../../data/skillsList";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState, useEffect } from "react";
import SubWrap from "../../../../layout/subwrap/subWrap";
export default function ChargeEdit(props) {
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [ChargeList, setChargeList] = useState(CommChargeList); //데이터
  function saveMyCharge() {
    setIsOpenDialog(true);
    console.log(props.myCharges);
  }

  useEffect(() => {
    let tempChargeArray = [...ChargeList];
    tempChargeArray.map((tempChargeItem, tempChargeIndex) => {
      tempChargeItem.Charge_list.map((ChargeListItem, ChargeListIndex) => {
        props.myCharges.map((myItem, myIndex) => {
          if (ChargeListItem.comm_cd == myItem.comm_cd) {
            tempChargeArray[tempChargeIndex].Charge_list[
              ChargeListIndex
            ].checked = true;
          }
        });
      });
    });
    setChargeList(tempChargeArray);
  }, [props.myCharges]);

  return (
    <SubWrap subTitle={"보유한 간병기술을 선택해주세요."}>
      기술 목록
      <Stack container spacing={1.5}>
        {ChargeList.map((item, index) => {
          return (
            <div key={index}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{item.Charge_type_nm}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {item.Charge_list.map((ChargeItem, ChargeIndex) => {
                    return (
                      <div>
                        <Paper elevation={3}>
                          <FormControlLabel
                            value="start"
                            control={
                              <Switch
                                color="primary"
                                defaultChecked={ChargeItem.checked}
                              />
                            }
                            label={ChargeItem.comm_nm}
                            labelPlacement="start"
                            onChange={(e) => {
                              if (!e.target.checked) {
                                let tempMyCharges = [...props.myCharges];
                                let currentIndex = tempMyCharges.findLastIndex(
                                  (temp) => {
                                    return temp.comm_cd == ChargeItem.comm_cd;
                                  }
                                );
                                tempMyCharges.splice(currentIndex, 1);
                                props.setMyCharges(tempMyCharges);

                                let tempChargeList = [...ChargeList[ChargeIndex]];
                                tempChargeList[ChargeIndex].checked = false;
                                setChargeList(tempChargeList);
                              } else {
                                let tempArray = [...props.myCharges];
                                tempArray.push(ChargeItem);
                                props.setMyCharges(tempArray);
                              }
                            }}
                          />
                        </Paper>
                      </div>
                    );
                  })}
                </AccordionDetails>
              </Accordion>
            </div>
          );
        })}
      </Stack>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 1, mb: 2 }}
        onClick={saveMyCharge}
      >
        저장
      </Button>
    </SubWrap>
  );
}
