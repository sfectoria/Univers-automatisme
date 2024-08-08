"use client";
import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';
import { store } from '@/store/store';
import React from 'react'
import { Provider } from 'react-redux';

function ClientLayout({ children }) {
  return (
    <Provider store={store}>
      <Header />
      {children}
      <Footer />
    </Provider>
  )
}

export default ClientLayout