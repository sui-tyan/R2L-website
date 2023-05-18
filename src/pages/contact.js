import BecomeVolunteer from '@/components/BecomeVolunteer/BecomeVolunteer';
import ContactPage from '@/components/ContactPage/ContactPage';
import GoogleMap from '@/components/GoogleMap/GoogleMap';
import Funding from '@/components/Funding/Funding';
import Layout from '@/components/Layout/Layout';
import PageHeader from '@/components/PageHeader/PageHeader';
import React from 'react';
import bg from '@/images/backgrounds/contactus-bg.jpg';

const Contact = () => {
  return (
    <div>
      <Layout pageTitle="Home Three">
        <PageHeader header={bg} pageTitle="Contact" />
        <ContactPage />
        {/* <GoogleMap /> */}
        {/* <BecomeVolunteer /> */}
      </Layout>
    </div>
  );
};

export default Contact;
