import React from 'react'
import { NavBar } from '../navigation';
import { Footer } from '../footer/Footer';

const MainLayout = ({children}) => {
  return (
    <>
    <NavBar />
      {children}
    <Footer />
    </>
  )
}

export default MainLayout;