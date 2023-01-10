import React from 'react';
import {Route,Routes} from 'react-router-dom';
import Panel from './Panel';

const AppRoute = () => {
  return (
      <Routes>
          <Route path='*' element='404'/>
          <Route path='/' element={<Panel/>}/>
          {/* <Route path='panel/signup' element={<Signup/>}/> */}
          {/* <Route path='panel/dashboard' element={<Dashboard/>}/> */}
      </Routes>
  )
}

export default AppRoute;
