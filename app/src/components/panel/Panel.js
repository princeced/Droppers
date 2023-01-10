import React from 'react'
import { Frame } from '@shopify/polaris'
import { Route, Routes } from 'react-router-dom';
import Topbar from './dashboard/Topbar'
import Sidebar from './dashboard/Sidebar'
import Dashboard from './dashboard/Dashboard';
import Accounts from './accounts/Accounts';
import Product from './product/Product';

const Panel = () => {
  return (
    <>
      <>
        <Frame
          topBar={<Topbar />}
          navigation={<Sidebar />}
          showMobileNavigation={true}
          onNavigationDismiss={false}
        >
          <Routes>
            <Route path='*' element='404'/>
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path='/product' element={<Product/>} />
            <Route path='/accounts' element={<Accounts/>} />
          </Routes>
        </Frame>
      </>
    </>
  )
}

export default Panel
