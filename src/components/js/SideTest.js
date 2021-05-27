import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Link,
} from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import PermPhoneMsgIcon from '@material-ui/icons/PermPhoneMsg';
import TimelineIcon from '@material-ui/icons/Timeline';
import React from 'react';
export default function SideBarTest() {
  return (
    <Drawer variant='permanent'>
      <List component="nav" aria-label="main mailbox folders" >
        <ListItem button>
          <ListItemIcon>
            <PersonIcon style={{ fontSize: 30 }} />
          </ListItemIcon>

          <Link href='#idaBoutMe' onClick={() => onClose(false)}>
            <ListItemText>
              <Typography variant='h5'
                className="colorGreen fontTopic buttonSideBar">
                About Me
              </Typography>
            </ListItemText>
          </Link>
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <DeveloperModeIcon style={{ fontSize: 30 }} />
          </ListItemIcon>

          <Link href='#idDevSkills' onClick={() => onClose(false)}>
            <ListItemText>
              <Typography variant='h5'
                className="colorGreen fontTopic buttonSideBar">
                Dev Skills
              </Typography>
            </ListItemText>
          </Link>


        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <BusinessCenterIcon style={{ fontSize: 30 }} />
          </ListItemIcon>

          <Link href='#idServices' onClick={() => onClose(false)}>
            <ListItemText>
              <Typography variant='h5'
                className="colorGreen fontTopic buttonSideBar">
                Serviços
              </Typography>
            </ListItemText>
          </Link>
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <TimelineIcon style={{ fontSize: 30 }} />
          </ListItemIcon>
          <Link href='#idExperience' onClick={() => onClose(false)}>
            <ListItemText>
              <Typography variant='h5'
                className="colorGreen fontTopic buttonSideBar">
                Experiências
              </Typography>
            </ListItemText>
          </Link>
        </ListItem>

        <ListItem button>
          <ListItemIcon >
            <VerifiedUserIcon style={{ fontSize: 30 }} />
          </ListItemIcon>
          <Link href='#idQualificacoes' onClick={() => onClose(false)}>
            <ListItemText>
              <Typography variant='h5'
                className="colorGreen fontTopic buttonSideBar">
                Certificados
              </Typography>
            </ListItemText>
          </Link>
        </ListItem>

        <ListItem button >
          <ListItemIcon>
            <PermPhoneMsgIcon style={{ fontSize: 30 }} />
          </ListItemIcon>
          <Link href='#idContacs' onClick={() => onClose(false)}>
            <ListItemText>
              <Typography variant='h5'
                className="colorGreen fontTopic buttonSideBar">
                Contatos
              </Typography>
            </ListItemText>
          </Link>
        </ListItem>
      </List>
    </Drawer>
  );
}
