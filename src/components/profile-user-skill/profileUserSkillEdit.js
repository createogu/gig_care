import * as React from "react";
import { Button, Avatar, Chip, Stack, Paper } from "@mui/material";
import "./profileUserSkill.css";
import CommSkillList from "../../data/skillsList";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState, useEffect } from "react";
import SubWrap from "../../layout/subwrap/subWrap";
export default function ProfileUserSkillEdit(props) {
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [SkillList, setSkillList] = useState(CommSkillList); //데이터
  function saveMySkill() {
    setIsOpenDialog(true);
    console.log(props.mySkills);
  }

  useEffect(() => {
    let tempSkillArray = [...SkillList];
    tempSkillArray.map((tempSkillItem, tempSkillIndex) => {
      tempSkillItem.skill_list.map((skillListItem, skillListIndex) => {
        props.mySkills.map((myItem, myIndex) => {
          if (skillListItem.comm_cd == myItem.comm_cd) {
            tempSkillArray[tempSkillIndex].skill_list[
              skillListIndex
            ].checked = true;
          }
        });
      });
    });
    setSkillList(tempSkillArray);
  }, [props.mySkills]);

  return (
    <SubWrap subTitle={"보유한 간병기술을 선택해주세요."}>
      기술 목록
      <Stack container spacing={1.5}>
        {SkillList.map((item, index) => {
          return (
            <div key={index}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{item.skill_type_nm}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {item.skill_list.map((skillItem, skillIndex) => {
                    return (
                      <div>
                        <Paper elevation={3}>
                          <FormControlLabel
                            value="start"
                            control={
                              <Switch
                                color="primary"
                                defaultChecked={skillItem.checked}
                              />
                            }
                            label={skillItem.comm_nm}
                            labelPlacement="start"
                            onChange={(e) => {
                              if (!e.target.checked) {
                                let tempMySkills = [...props.mySkills];
                                let currentIndex = tempMySkills.findLastIndex(
                                  (temp) => {
                                    return temp.comm_cd == skillItem.comm_cd;
                                  }
                                );
                                tempMySkills.splice(currentIndex, 1);
                                props.setMySkills(tempMySkills);

                                let tempSkillList = [...SkillList[skillIndex]];
                                tempSkillList[skillIndex].checked = false;
                                setSkillList(tempSkillList);
                              } else {
                                let tempArray = [...props.mySkills];
                                tempArray.push(skillItem);
                                props.setMySkills(tempArray);
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
        onClick={saveMySkill}
      >
        저장
      </Button>
    </SubWrap>
  );
}
