import React, { useState } from 'react';
import Navbar from './components/js/Navbar.js';
import Sidebar from './components/js/Sidebar.js';
import Perfil from './components/js/Perfil';
import AboutMe from './components/js/AboutMe';
import DevSkills from '../src/components/js/DevSkills';
import Services from './components/js/Services';
import Experience from './components/js/Experience';
import Qualificacoes from './components/js/Qualificacoes';
import { Grid } from '@material-ui/core';
import './App.css';
import Footer from './components/js/Footer.js';

export default function App() {
  const [open, setOpen] = useState(false);


  return (
    <Grid container>
      <Grid item md='4' lg='2' xl='2'>
        <Sidebar onClose={(data) => {
          setOpen(data);
        }} open={open} />
      </Grid>

      <Grid item md='8' lg='10' xl='10'>
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

      </Grid>
    </Grid>

  );
}
