import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   BrowserRouter
// } from "react-router-dom";
import SiteNav from '../src/Components/Navbar/SiteNav.js';
import Header from '../src/Components/Header/Header.js';
import Main from '../src/Components/Main/Main.js';
import Footer from '../src/Components/Footer/Footer.js';




class App extends React.Component {
  render() {
    return(
      <>
        <SiteNav/> 
        <Header/> 
        <Main/>
        <Footer/>

      </>
    );
  }
}


export default App;
