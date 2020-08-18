import React from 'react';
import Header from './Header';
import TopNavigation from './TopNavigation';
// import Footer from './Footer';

const MainLayout = ({ children }) => {
  return (
    <>
      <Header title="Death Penalty Report - 2019" />
      <TopNavigation />
      <main style={{ padding: 14 }}>{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default MainLayout;
