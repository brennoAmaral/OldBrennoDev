import React, {useState} from 'react';
import './App.css';
import Navbar from './components/js/Navbar.js';
import Sidebar from './components/js/Sidebar.js';
import Perfil from './components/js/Perfil';
import AboutMe from './components/js/AboutMe';
import DevSkills from '../src/components/js/DevSkills';


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
      <Perfil/>
      <AboutMe/>
      <DevSkills/>

    </>
  );
}
