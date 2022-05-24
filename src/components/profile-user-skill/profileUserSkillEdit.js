import * as React from "react";
import { Button, Avatar, Chip, Grid } from "@mui/material";
import "./profileUserSkill.css";
import CommSkillList from "../../data/skillsList"
import DoneIcon from "@mui/icons-material/Done";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useState } from "react";
import SubWrap from "../../layout/subwrap/subWrap";
export default function ProfileUserSkillEdit() {
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [SkillList, setSkillList] = useState(CommSkillList);
  function openEditDialog() {
    setIsOpenDialog(true);
  }
  function SkillDelete(){
    
  }
  return (
    <SubWrap subTitle={"보유한 간병기술을 선택해주세요."}>
      기술 목록
      <Grid container spacing={0}>
        {SkillList.map((item, index) => {
          return (
            <div>
              <Chip
                className="CusotomChip"
                label={item.comm_nm}
                variant="outlined"
                color="primary"
                onDelete={()=>{
                  console.log(index);
                  let tempArray = [...SkillList];
                  tempArray.splice(index,1);
                  setSkillList(tempArray);
                }}
                deleteIcon={<AddCircleIcon/>}
                
              />
            </div>
          );
        })}
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={openEditDialog}
      >
        저장
      </Button>
    </SubWrap>
  );
}
