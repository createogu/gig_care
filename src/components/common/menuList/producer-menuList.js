import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FaceIcon from "@mui/icons-material/Face";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import HomeIcon from "@mui/icons-material/Home";

const ProducerMenuList = (props) => {
  return (
    <BottomNavigation maxWidth="x1" showLabels onChange={props.handleChange}>
      <BottomNavigationAction
        label="내정보"
        value="profile"
        icon={<FaceIcon />}
      />
      <BottomNavigationAction
        label="달력"
        value="calender"
        icon={<CalendarMonthIcon />}
      />
      <BottomNavigationAction label="홈화면" value="" icon={<HomeIcon />} />
      <BottomNavigationAction
        label="계약"
        value="contract"
        icon={<ReceiptLongIcon />}
      />
      <BottomNavigationAction
        label="지불"
        value="payment"
        icon={<AttachMoneyIcon />}
      />
    </BottomNavigation>
  );
};

export default ProducerMenuList;
