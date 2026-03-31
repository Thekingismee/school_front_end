// src/components/Layout.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppLink from '../components/WhatsAppLink';
import ChatBot from '../components/ChatBot';
import ChatbotWidget from '../components/ChatBot';

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Navbar />
      <WhatsAppLink />
<ChatbotWidget
 
/>      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;