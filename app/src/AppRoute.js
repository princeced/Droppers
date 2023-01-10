import React from 'react';
import {Route,Routes} from 'react-router-dom';
import PanelRoute from './components/panel/PanelRoute';
import Signup from './components/auth/signup/Signup';
import Login from './components/auth/login/Login';
import Panel from './components/panel/Panel';

const AppRoute = () => {
  return (
      <Routes>
          <Route path='*' element='404'/>
          <Route path='/' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='panel/*' element={<Panel/>}/>
      </Routes>
  )
}

export default AppRoute;
