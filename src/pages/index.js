import BrandOne from '@/components/BrandOne/BrandOne';
import CausesTwo from '@/components/CausesTwo/CausesTwo';
import Counters from '@/components/Counters/Counters';
import EventsOne from '@/components/EventsOne/EventsOne';
import FourIcon from '@/components/FourIcon/FourIcon';
import Funding from '@/components/Funding/Funding';
import GalleryOne from '@/components/GalleryOne/GalleryOne';
import Introduction from '@/components/Introduction/Introduction';
import Layout from '@/components/Layout/Layout';
import MainSliderTwo from '@/components/MainSliderTwo/MainSliderTwo';
import MainSliderThree from '@/components/MainSliderThree/MainSliderThree';
import NewsTwo from '@/components/NewsTwo/NewsTwo';
import Volunteer from '@/components/Volunteer/Volunteer';
import WeInspire from '@/components/WeInspire/WeInspire';
import React from 'react';

const Home2 = () => {
  return (
    <div>
      <Layout pageTitle="">
        <MainSliderTwo />
        {/* <MainSliderThree /> */}
        <Introduction />
        <FourIcon />
        {/* <WeInspire /> */}
        {/* <BrandOne /> */}
        {/* <Volunteer /> */}
        {/* <CausesTwo />
        <Counters /> */}
        <NewsTwo />
        {/* <GalleryOne className="gallery-two" /> */}
        {/* <EventsOne /> */}
      </Layout>
    </div>
  );
};

export default Home2;
