import React from 'react'
import { AppBar, Toolbar, Typography, styled } from "@mui/material"; 
import { NavLink } from 'react-router-dom';


const Header = styled(AppBar)`
background: #111111;`

const Tabs = styled(NavLink)`
font-size: 25px;
margin-right: 25px; 
color: inherit; // color remove
text-decoration: none; // to remove underline
`

const NavigationBar = () => {
    return (
        <Header position='static'>
            <Toolbar>
                 <Tabs to="/">Home</Tabs>
                <Tabs to="/all">All Users</Tabs>
                 <Tabs  to="/add">Add User</Tabs>

            </Toolbar>
        </Header>
            
    )
    }

export default NavigationBar;