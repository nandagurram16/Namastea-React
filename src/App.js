import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import ErrorPage from './components/ErrorPage';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet /> {/* This is where child routes will appear */}
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppLayout />}>
        {/* Child routes go inside here */}
        <Route index element={<Body />} /> {/* Default home page */}
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
