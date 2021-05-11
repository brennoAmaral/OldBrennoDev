import React, {useState} from 'react';
import './App.css';
import Navbar from './components/js/Navbar.js';
import Sidebar from './components/js/Sidebar.js';
import Perfil from './components/js/Perfil';
import AboutMe from './components/js/AboutMe';


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
      {/*
      <Box>

        <Cape />

         <Box height="10vh" className="bgGreen jcCenter" display="flex">

          <Avatar alt="Remy Sharp" src="" className="avatar" />

      </Box>
   */}

      <Perfil/>
      <AboutMe/>

    </>
  );
}
