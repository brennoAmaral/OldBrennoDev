import React, { useEffect, useState } from 'react';
import {
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  ListItem,
  Link,
  Typography,
} from '@material-ui/core';
import { off, on } from '../../utils/resize';
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
  const [anchor, setAnchor] = useState('rigth');
  const [variant, setVariant] = useState('temporary');

  useEffect(() => {
    function breakpoint(value) {
      console.log('breakpoint: ', value);
      if (['md', 'lg', 'xl'].includes(value)) {
        setAnchor('left');
        setVariant('permanent');
      } else {
        setAnchor('right');
        setVariant('temporary');
      }
    }
    on(breakpoint);
    return () => off(breakpoint);
  }, []);

  return (


    <Drawer anchor={anchor}
      variant={variant} open={open} onClose={() => {
        onClose(false);
      }} className="colorGrayPrimary widthDrawer">

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

SideBar.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
