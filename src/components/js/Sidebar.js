import React from 'react'
import '../css/Sidebar.css'
import { Drawer, List, ListItemIcon, ListItemText,ListItem } from '@material-ui/core'
import {Inbox as InboxIcon, Drafts as DraftsIcon} from '@material-ui/icons'
import PersonIcon from '@material-ui/icons/Person';

import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import PermPhoneMsgIcon from '@material-ui/icons/PermPhoneMsg';
import TimelineIcon from '@material-ui/icons/Timeline';

export default function SideBar(props) {

    const { onClose, open } = props;

    return (
        <Drawer anchor="right" open={open} onClose={() => { onClose(false) }}>
            <List component="nav" aria-label="main mailbox folders">
                
                <ListItem button>
                    <ListItemIcon>
                        <PersonIcon/>
                    </ListItemIcon>
                    <ListItemText primary="About me" />
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                    <DeveloperModeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dev Skills" />
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <BusinessCenterIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Serviços" />
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <TimelineIcon />
                    </ListItemIcon>
                    <ListItemText primary="Experiência" />
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <VerifiedUserIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Certificados" />
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <PermPhoneMsgIcon />
                    </ListItemIcon>
                    <ListItemText primary="Contatos" />
                </ListItem>

            </List>

            
            
        </Drawer>
    )
}