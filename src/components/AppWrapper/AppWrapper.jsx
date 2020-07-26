import React from 'react';
import Header from '../Header/Header';

function AppWrapper({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default AppWrapper;
