import React from 'react';
import Home from './home.js';
import Profile from './profile.js';
import Calender from './calender.js';
import Contract from './contract.js';
import Payment from './payment.js';
import Container from '@mui/material/Container';
import PageHeader from '../components/page-header/main-header.js';

const Main = (props) => {

    return (
        <div >
            <Container maxWidth="100sm">
                {
                    props.value == "home" ? <div><PageHeader value={props.value} /> <Home /></div> : null
                }
                {
                    props.value == "profile" ? <Profile /> : null
                }{

                    props.value == "calender" ? <Calender /> : null
                }
                {
                    props.value == "contract" ? <Contract /> : null
                }{
                    props.value == "payment" ? <Payment /> : null
                }
            </Container>

            {/* <Container maxWidth="100sm">
                {
                    props.menuList.map((item, index) => {
                        return(
                        <div>
                            {
                                item.menuCode == props.value ? item.menuName : null
                            }
                        </div>
                        )
                    })
                }
            </Container>             */}

        </div>
    );
};

export default Main;