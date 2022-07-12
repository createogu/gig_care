import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Fab from "@mui/material/Fab";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import EditIcon from '@mui/icons-material/Edit';

const ConsumerMenuList = (props) => {
  return (
    <BottomNavigation maxWidth="x1" showLabels onChange={props.handleChange}>
      <BottomNavigationAction
        label="내정보"
        value="helperList"
        icon={<PersonIcon />}
      />
      <BottomNavigationAction
        label="달력"
        value="helperList"
        icon={<CalendarMonthIcon />}
      />
      <BottomNavigationAction
        value="helperList"
        icon={
          <Fab
            color="primary"
            sx={{ border: 5, width:65, height:65, position: "fixed", bottom: 8 }}
          >
            <HomeIcon  sx={{fontSize:40}}/>
          </Fab>
        }
      />
      <BottomNavigationAction
        label="계약"
        value="helperList"
        icon={<EditIcon />}
      />
      <BottomNavigationAction
        label="결제"
        value="helperList"
        icon={<CreditCardIcon />}
      />
    </BottomNavigation>
  );
};

export default ConsumerMenuList;
