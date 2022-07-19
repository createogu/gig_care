import * as React from "react";
import {
  Button,
  Box,
  Chip,
  Stack,
  Paper,
  InputBase,
  TextField,
} from "@mui/material";
import "./Skill.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import axios from "axios";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import PetsIcon from "@mui/icons-material/Pets";
import DryCleaningIcon from "@mui/icons-material/DryCleaning";
import BabyChangingStationIcon from "@mui/icons-material/BabyChangingStation";
export default function SkillEdit(props) {
  const [value, setValue] = useState(props.helperInfo.careType - 1);
  const [careType, setCareType] = useState(props.helperInfo.careType);
  const [tagItem, setTagItem] = useState("");
  const [tagList, setTagList] = useState(props.tagList);
  const [topTagList, setTopTagList] = useState([]);
  const [isValidate, setIsValidate] = useState();
  const [validateText, setValidateText] = useState();
  console.log(props.tagList);
  function closeEditDialog() {
    props.setIsOpenDialog(false);
  }
  function validateCheck(p_tagItem) {
    let validate = tagList.includes(p_tagItem);
    let valiText = validate ? "중복된 태그 입니다." : null;

    setValidateText(valiText);
    return !validate;
  }

  const onKeyPress = (e) => {
    if (e.target.value.length !== 0 && e.key === "Enter") {
      if (validateCheck(e.target.value)) {
        submitTagItem(e.target.value);
      }
    }
  };

  const submitTagItem = (p_tagItem) => {
    alert(p_tagItem);
    let updatedTagList = [...tagList];
    updatedTagList.push(p_tagItem);
    setTagList(updatedTagList);
    setTagItem("");
  };

  const addRecoTagItem = (p_tagItem) => {
    if (validateCheck(p_tagItem)) {
      submitTagItem(p_tagItem);
    }
  };

  const deleteTagItem = (e) => {
    const deleteTagItemNm = e.target.parentElement.firstChild.innerHTML;
    const filteredTagList = tagList.filter(
      (tagItem) => tagItem !== deleteTagItemNm
    );
    setTagList(filteredTagList);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setCareType(newValue + 1);
  };

  function modifyTag() {
    (async () => {
      try {
        const res = await axios.post(
          process.env.REACT_APP_BACK_BASE_URL + "/helper/modifyTag.do",
          {
            userId: props.helperInfo.userId,
            careType: careType,
            tagList: tagList,
          }
        );
      } catch (e) {
        console.error(e);
      }
    })();
  }

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.post(
          process.env.REACT_APP_BACK_BASE_URL + "/helper/getTopTagList.do",
          {
            careType: careType,
          }
        );
        let rtnData = res.data;
        if (rtnData != null) {
          setTopTagList(rtnData.topTagList);
        }
      } catch (e) {
        console.error(e);
      }
    })();
  }, [careType]);

  return (
    <Box>
      <Box
        fullWidth
        sx={{
          alignItems: "center",
        }}
      >
        <Tabs value={value} onChange={handleChange} centered>
          <Tab icon={<LocalHospitalIcon />} label="환자" />
          <Tab icon={<PetsIcon />} label="펫" />
          <Tab icon={<DryCleaningIcon />} label="가사" />
          <Tab icon={<BabyChangingStationIcon />} label="육아" />
        </Tabs>
      </Box>

      <Box>
        <Typography sx={{ p: 2, pb: 0 }}>추천 키워드</Typography>
        <Box sx={{ p: 1 }}>
          {topTagList.map((tagItem, index) => {
            return (
              <Chip
                sx={{ mb: 1, mr: 1 }}
                key={index}
                label={tagItem.tagNm}
                onClick={(e) => {
                  addRecoTagItem(tagItem.tagNm);
                }}
              />
            );
          })}
        </Box>
      </Box>
      <Box>
        <TextField
          sx={{ pb: 0 }}
          fullWidth
          placeholder="보유한 기술을 입력해주세요."
          onChange={(e) => setTagItem(e.target.value)}
          value={tagItem}
          onKeyPress={onKeyPress}
          helperText={
            <Box>
              <Typography
                variant={"body2"}
                sx={{ textAlign: "right", color: "red" }}
              >
                {validateText}
              </Typography>
            </Box>
          }
        />
      </Box>
      <Box sx={{ p: 1 }}>
        <Typography sx={{ p: 2 }}>입력 키워드(10개 제한)</Typography>
        {tagList.map((tagItem, index) => {
          return (
            <Chip
              sx={{ mb: 1, mr: 1 }}
              key={index}
              label={tagItem.tagNm}
              onDelete={deleteTagItem}
            />
          );
        })}
      </Box>

      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 1, mb: 2 }}
        onClick={() => {
          modifyTag();
          // closeEditDialog();
        }}
      >
        저장
      </Button>
    </Box>
  );
}
