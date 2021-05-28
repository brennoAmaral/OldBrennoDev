import React, {useState} from 'react';
import Navbar from './components/js/Navbar.js';
import Perfil from './components/js/Perfil';
import AboutMe from './components/js/AboutMe';
import DevSkills from '../src/components/js/DevSkills';
import Services from './components/js/Services';
import Experience from './components/js/Experience';
import Qualificacoes from './components/js/Qualificacoes';
import Footer from './components/js/Footer.js';
import SideBar from './components/js/Sidebar.js';
import { Box } from '@material-ui/core';
import './App.css';

export default function App() {
  const [open, setOpen] = useState(false);


  return (
    <Box display='flex'>
      <SideBar onClose={(data) => {
        setOpen(data);
      }} open={open}
      classesName="sideBarStyle"/>
      <Box className='overflowxHidden'>
        <Navbar onOpen={(data) => {
          setOpen(data);
        }} />

        <Perfil />
        <AboutMe />
        <DevSkills />
        <Services />
        <Experience />
        <Qualificacoes />
        <Footer />
      </Box>

    </Box>

  );
}

