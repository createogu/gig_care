import * as React from "react";
import { Button, Avatar, Chip, Stack, Paper } from "@mui/material";
import "./profileUserSkill.css";
import CommSkillList from "../../data/skillsList"
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState, useEffect } from "react";
import SubWrap from "../../layout/subwrap/subWrap";
export default function ProfileUserSkillEdit(props) {
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [SkillList, setSkillList] = useState(CommSkillList);
  function openEditDialog() {
    setIsOpenDialog(true);
  }

  useEffect(() => {
    let tempSkillArray = [...SkillList];
    tempSkillArray.map((item, index) => {
      props.mySkills.map((myItem, myIndex) => {
        if (item.comm_cd == myItem.comm_cd) {
          tempSkillArray[index].checked = true;
        }
      })
    })
    setSkillList(tempSkillArray);
  }, [props.mySkills])

  return (
    <SubWrap subTitle={"보유한 간병기술을 선택해주세요."}>
      기술 목록
      <Stack container spacing={1.5}>
        {SkillList.map((item, index) => {
          return (
            <div>
              <Paper elevation={3}>
                <FormControlLabel
                  value="start"
                  control={<Switch color="primary" defaultChecked={item.checked} />}
                  label={item.comm_nm}
                  labelPlacement="start"
                  onChange={(e) => {
                    if (!e.target.checked) {
                      let tempMySkills = [...props.mySkills];
                      let currentIndex = tempMySkills.findLastIndex((temp) => {
                        return (temp.comm_cd == item.comm_cd);
                      })
                      tempMySkills.splice(currentIndex, 1);
                      props.setMySkills(tempMySkills);

                      let tempSkillList = [...SkillList];
                      tempSkillList[index].checked = false;
                      setSkillList(tempSkillList);
                    } else {
                      let tempArray = [...props.mySkills];
                      tempArray.push(item);
                      props.setMySkills(tempArray);
                    }
                  }}
                />
              </Paper>
            </div>
          );
        })}
      </Stack>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 1, mb: 2 }}
        onClick={openEditDialog}
      >
        저장
      </Button>
    </SubWrap>
  );
}
