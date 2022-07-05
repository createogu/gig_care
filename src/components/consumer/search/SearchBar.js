import * as React from "react";
import { Button, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchFilter from "./SearchFilter.js";

export default function SearchBar(props) {
  return (
    <div>
      <Accordion expanded={props.isOpenSearchBar}>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Button
            variant="contained"
            disableElevation
            fullWidth
            onClick={() => {
              props.setIsOpenSearchBar(true)
            }}
          >
            조건검색(작업중)
          </Button>
        </AccordionSummary>
        <AccordionDetails>
          <SearchFilter setIsOpenSearchBar={props.setIsOpenSearchBar} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
