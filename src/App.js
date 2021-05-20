import React, { useState } from 'react';
import Navbar from './components/js/Navbar.js';
import Sidebar from './components/js/Sidebar.js';
import Perfil from './components/js/Perfil';
import AboutMe from './components/js/AboutMe';
import DevSkills from '../src/components/js/DevSkills';
import Services from './components/js/Services';
import Experience from './components/js/Experience';
import Qualificacoes from './components/js/Qualificacoes';
import Contatcs from './components/js/Contacts';
import './App.css';
import Footer from './components/js/Footer.js';

export default function App() {
  const [open, setOpen] = useState(false);


  return (
    <>

      <Navbar onOpen={(data) => {
        setOpen(data);
      }} />
      <Sidebar onClose={(data) => {
        setOpen(data);
      }} open={open} />
      <Perfil />
      <AboutMe />
      <DevSkills/>
      <Services />
      <Experience />
      <Qualificacoes />
      <Contatcs />
      <Footer/>

    </>
  );
}
