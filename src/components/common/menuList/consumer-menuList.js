import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FaceIcon from "@mui/icons-material/Face";

const ConsumerMenuList = (props) => {
  return (
    <BottomNavigation maxWidth="x1" showLabels onChange={props.handleChange}>
      <BottomNavigationAction
        label="검색"
        value="helperList"
        icon={<FaceIcon />}
      />
    </BottomNavigation>
  );
};

export default ConsumerMenuList;
