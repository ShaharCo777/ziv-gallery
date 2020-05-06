import React, {useEffect, useState} from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import PrivateRoute from './PrivateRoute.jsx'

import Navbar from "./components/Navbar.jsx"
import Landing from "./components/landing.jsx"

import ContantPage from './components/contant/ContantPage.jsx'
import PhotoPage from './components/photos/PhotoPage'
import PhotoResult from './components/photos/PhotoResult'

import MannagersMain from './components/manager_look/MannagersMain'

import  {checkIfDevoloper} from './lib/IpCheck'

const  App = () => {
 const [isManger, setIsManger] =  useState(false)

useEffect(async ()  =>  {
  setIsManger(await checkIfDevoloper())
}, [])

  return (
    <Router>
      <Navbar isManger={isManger}/>
      <Route exact path='/' component={Landing} />
      <Route exact path='/contant' component={ContantPage} />
      <Route exact path='/photo/:id' component={PhotoPage} />
      <Route exact path='/result/:searchTerm' component={PhotoResult} />
      <Route exact path='/album/:subject' component={Landing} />
    
    
      <PrivateRoute exact path='/manager/uploadPhoto' component={MannagersMain} isManger={isManger}/>
    </Router>
  )
}

export default App;
