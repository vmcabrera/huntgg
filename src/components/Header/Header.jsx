import React, { useContext } from 'react';
import { ResponsiveContext } from '../../providers/context';
import HeaderDesktop from './HeaderDesktop';
import MobileDesktop from './HeaderMobile';

function Header() {
  const { resolution } = useContext(ResponsiveContext);

  switch (resolution) {
    case 'lg':
    case 'md':
      return <HeaderDesktop />;
    default:
      return <MobileDesktop />;
  }
}

export default Header;
