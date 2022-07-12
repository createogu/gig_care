import * as React from "react";
import {
  Button,
  Box,
  Container,
  IconButton,
  Typography,
  TextField,
  Chip,
  Stack,
  Paper,
} from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import SearchIcon from "@mui/icons-material/Search";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SearchFilter from "./SearchFilter.js";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import PetsIcon from "@mui/icons-material/Pets";
import DryCleaningIcon from "@mui/icons-material/DryCleaning";
import BabyChangingStationIcon from "@mui/icons-material/BabyChangingStation";

export default function SearchBar(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      {/* <Container maxWidth={"sm"}> */}
      <Accordion expanded={props.isOpenSearchBar}>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Stack
            alignItems="center"
            direction={"column"}
            spacing={1}
            sx={{ width: "100%" }}
          >
            <Box
              sx={{
                alignItems: "center",
                width: "100%",
              }}
            >
              <Tabs value={value} onChange={handleChange} centered>
                <Tab sx={{}} icon={<LocalHospitalIcon />} label="환자" />
                <Tab icon={<PetsIcon />} label="펫" />
                <Tab icon={<DryCleaningIcon />} label="가사" />
                <Tab icon={<BabyChangingStationIcon />} label="육아" />
              </Tabs>
            </Box>
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: "100%",
                maxWidth: "sm",
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="태그, 키워드를 검색해보세요."
              />
              <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
              <IconButton
                color="primary"
                sx={{ p: "10px" }}
                aria-label="directions"
                onClick={() => {
                  props.setIsOpenSearchBar(
                    props.isOpenSearchBar ? false : true
                  );
                }}
              >
                <FilterAltIcon />
              </IconButton>
            </Paper>
            <Box sx={{ maxWidth: "sm" }}>
              <Stack alignItems="left" direction={"row"} spacing={1}>
                <Chip
                  variant="outlined"
                  color="primary"
                  size="small"
                  label="섬망"
                  sx={{ p: 1, pb: 1.5 }}
                />
                <Chip
                  variant="outlined"
                  color="primary"
                  size="small"
                  label="욕창"
                  sx={{ p: 1, pb: 1.5 }}
                />
                <Chip
                  variant="outlined"
                  color="primary"
                  size="small"
                  label="석션"
                  sx={{ p: 1, pb: 1.5 }}
                />
                <Chip
                  variant="outlined"
                  color="primary"
                  size="small"
                  label="간질"
                  sx={{ p: 1, pb: 1.5 }}
                />
              </Stack>
            </Box>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <SearchFilter setIsOpenSearchBar={props.setIsOpenSearchBar} />
        </AccordionDetails>
      </Accordion>
      {/* </Container> */}
    </div>
  );
}
