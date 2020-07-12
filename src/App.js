import React from 'react'
import './App.css'
import { Router, Route } from 'react-router';
import { createBrowserHistory } from 'history';

import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Farms from './components/Farms'
import Footer from './components/Footer'
import Product from './components/Product'
import MobileFooterNav from "./components/MobileFooterNav";

function App() {
  return (
    <React.Fragment>
      <Router history = {createBrowserHistory()}>
        <Header/>
          <Route exact path = "/" component = {Home}></Route>
          <Route exact path = "/about" component = {About}></Route>
          <Route exact path = "/farms" component = {Farms}></Route>
          <Route exact path = "/product" component = {Product}></Route>
        <Footer />
        <MobileFooterNav />
      </Router>
    </React.Fragment>
  );
}

export default App;
