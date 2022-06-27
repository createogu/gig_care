import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FaceIcon from "@mui/icons-material/Face";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import HomeIcon from "@mui/icons-material/Home";

const ConsumerMenuList = (props) => {
  return (
    <BottomNavigation maxWidth="x1" showLabels onChange={props.handleChange}>
      <BottomNavigationAction
        label="검색"
        value="producerList"
        icon={<FaceIcon />}
      />
    </BottomNavigation>
  );
};

export default ConsumerMenuList;
