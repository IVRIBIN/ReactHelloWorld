import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

import { Routes, Route, BrowserRouter } from "react-router-dom"

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            
            <Route path="/profile" 
              element={<Profile state={props.state.profilePage} addPost={props.addPost}/>}
            />
            <Route path="/dialogs/*" 
              element={<Dialogs state={props.state.dialogsPage} />}
            />
            
          </Routes>
        </div>

        {/*<Profile/>*/}
      </div>
    </BrowserRouter>
  );
}


export default App;
