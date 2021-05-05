import React,{useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Navbar from './components/js/Navbar';
import Sidebar from './components/js/Sidebar.js';

function App() {

  
  const [open, setOpen] = useState(false);


  return (
    <>

      <Navbar onOpen={(data)=>{ setOpen(data) }}/>
      <Sidebar onClose={(data)=>{ setOpen(data) }} open={open}/>

    </>
  )
}

export default App;
