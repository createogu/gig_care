import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FaceIcon from '@mui/icons-material/Face';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Paper from '@mui/material/Paper';
import HomeIcon from '@mui/icons-material/Home';

export default function PageFooter(props) {

    const handleChange = (event, newValue) => {
        props.setValue(newValue);
    };
    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation maxWidth="x1" showLabels value={props.value} onChange={handleChange}>
                <BottomNavigationAction
                    label="프로필"
                    value="profile"
                    icon={<FaceIcon />}
                />
                <BottomNavigationAction
                    label="달력"
                    value="calender"
                    icon={<CalendarMonthIcon />}
                />
                <BottomNavigationAction
                    label="홈화면"
                    value="home"
                    icon={<HomeIcon />}
                />
                <BottomNavigationAction
                    label="계약"
                    value="contract"
                    icon={<ReceiptLongIcon />}
                />
                <BottomNavigationAction label="지불" value="payment" icon={<AttachMoneyIcon />} />
            </BottomNavigation>
        </Paper>
    );
}
