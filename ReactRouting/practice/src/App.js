
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import About from './Component/About';
import Service from './Component/Service';
import DataFetcher from './DataFetcher';
// import Userlist from './Component/Userlist';
// import UserDetail from './Component/UserDetail';

function App() {
 
  

  return (
    
    
    <div className="App">
        <h1>Routing</h1>
       <BrowserRouter>
       <Navbar/>
      <Routes>
     
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/service" element={<Service/>} />
        <Route path='/*' element={<h1>page no found</h1>}></Route>
        
        
        {/* Dynamic routing
         <Route path='user' element={<Userlist/>}></Route>
        <Route path="/user/:id" element={<UserDetail />} /> */
        }
      </Routes>
    </BrowserRouter>
       <hr></hr> 
        <DataFetcher/>
              </div>
  );
}

export default App;
