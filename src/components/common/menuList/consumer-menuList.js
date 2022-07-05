import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";

const ConsumerMenuList = (props) => {
  return (
    <BottomNavigation maxWidth="x1" showLabels onChange={props.handleChange}>
      <BottomNavigationAction
        label="검색"
        value="helperList"
        icon={<HomeIcon />}
      />
    </BottomNavigation>
  );
};

export default ConsumerMenuList;
