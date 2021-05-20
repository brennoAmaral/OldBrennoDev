import React from 'react';
import {
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  ListItem,
  Link,
  Typography,
} from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';

import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import PermPhoneMsgIcon from '@material-ui/icons/PermPhoneMsg';
import TimelineIcon from '@material-ui/icons/Timeline';
import PropTypes from 'prop-types';
import '../css/Sidebar.css';

export default function SideBar(props) {
  const { onClose, open } = props;

  return (
    <div >
      <Drawer anchor="right" open={open} onClose={() => {
        onClose(false);
      }} className="colorGrayPrimary" >


        <List component="nav" aria-label="main mailbox folders" >

          <ListItem button>
            <ListItemIcon>
              <PersonIcon style={{ fontSize: 30 }} />
            </ListItemIcon>

            <Link href='#idaBoutMe' onClick={() => onClose(false)}>
              <ListItemText>
                <Typography variant='h5' className="colorGreen fontTopic">
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
                <Typography variant='h5' className="colorGreen fontTopic">
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
                <Typography variant='h6' className="colorGreen fontTopic">
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
                <Typography variant='h6' className="colorGreen fontTopic">
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
                <Typography variant='h6' className="colorGreen fontTopic">
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
                <Typography variant='h6' className="colorGreen fontTopic">
                  Contatos
                </Typography>
              </ListItemText>
            </Link>
          </ListItem>

        </List>


      </Drawer>
    </div>
  );
}

SideBar.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
