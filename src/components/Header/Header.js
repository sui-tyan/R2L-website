import dynamic from 'next/dynamic';
import React from 'react';
const HeaderOne = dynamic(() => import('./HeaderOne'));
const HeaderTwo = dynamic(() => import('./HeaderTwo'));
const HeaderThree = dynamic(() => import('./HeaderThree'));

const Header = ({ pageTitle }) => {
  return pageTitle === 'Home One' ? (
    <HeaderOne />
  ) : pageTitle === 'Home Two' ? (
    <HeaderTwo />
  ) : (
    <HeaderThree />
  );
};

export default Header;
