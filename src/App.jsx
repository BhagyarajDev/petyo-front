import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Layout from './Component/Layout';
import UserLayout from './Module/User/UserLayout';
import UserPetListing from './Module/User/UserPetListing';
import Dashboard from './Module/User/UserDashboard';
import PetDetailPage from './Module/User/UserPetDetails';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />

          <Route path='/user' element={<UserLayout />}>
            <Route index element={<Dashboard />} />

            {/* Other user pages */}
            <Route path="home" element={<Dashboard />} />
            <Route path='pet' element={<UserPetListing />} />
            <Route path='pet/details' element={<PetDetailPage />} />



          </Route>
        </Routes>


      </BrowserRouter>

    </>
  )
}

export default App
