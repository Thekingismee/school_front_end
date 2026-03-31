// src/components/Layout.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppLink from '../components/WhatsAppLink';

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Navbar />
      <WhatsAppLink />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;