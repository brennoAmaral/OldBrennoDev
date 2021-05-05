import React from 'react'
import { AppBar, Toolbar, Button, IconButton, Typography } from '@material-ui/core'
import { Menu as MenuIcon } from '@material-ui/icons'
import '../css/Navbar.css'
import Sidebar from './Sidebar.js'



export default function NavBar(props) {

    const { onOpen } = props;
    

    return (

        <AppBar position="static" className="bgNavColor">
            <Toolbar >
                <IconButton edge="start" color="inherit" onClick={() => { onOpen(true) }}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" >
                    Brenno(Dev);
                </Typography>
            </Toolbar>
        </AppBar>
    )
}