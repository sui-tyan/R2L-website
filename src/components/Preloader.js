import preloader from '@/images/r2l_logo-loader-256x256.png';
import React from 'react';
import { Image } from 'react-bootstrap';

const Preloader = ({ loading }) => {
  return (
    <div
      style={{ opacity: loading ? 1 : 0, transition: '1s ease', zIndex: 0 }}
      className="preloader"
    >
      <Image className="preloader__image" width="256" src={preloader.src} alt="" />
    </div>
  );
};

export default Preloader;
