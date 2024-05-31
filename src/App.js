import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from '../src/theme/ThemeContext';
import CompanyPage from './pages/CompanyPage';
import BlogsPage from './pages/BlogsPage';
import Footer from './components/footer/Footer';


const App = () => {
  return (
    <ThemeProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path ="/company" element = {<CompanyPage/>} />
        <Route path = "/blogs" element = {<BlogsPage/>}/>
      </Routes>
      <Footer/>
    </ThemeProvider>
  );
};

export default App;
