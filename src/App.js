import React from 'react';
import Navbar from './pages/Navbar/Navbar';
import LoginInfo from './pages/LoginPage/LoginPage';
import RegisterInfo from './pages/RegisterPage/RegisterPage';
import NotFound from './pages/NotFound/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Login" element={<LoginInfo />} />
        <Route path="/Register" element={<RegisterInfo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;