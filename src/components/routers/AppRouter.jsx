import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

import { LoginScreen } from '../login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
// import { DcScreen } from '../dc/DcScreen';
// import { MarvelScreen } from '../marvel/MarvelScreen';
// import { SearchScreen } from '../search/SearchScreen';
// import { Navbar } from '../ui/Navbar';


export const AppRouter = () => {
  return (
    <BrowserRouter>

      <Routes>
        
        <Route path="/login" element={
              <PublicRoute>
                <LoginScreen />
              </PublicRoute>
            } 
          />
        <Route path="/*" element={
            <PrivateRoute>
              <DashboardRoutes />
            </PrivateRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  )
}
