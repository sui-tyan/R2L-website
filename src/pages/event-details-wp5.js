import EventsDetailsPage from '@/components/EventsDetailsPage/EventsDetailsPage';
import Layout from '@/components/Layout/Layout';
import PageHeader from '@/components/PageHeader/PageHeader';
import eventsDetails5 from '@/data/eventsDetailsWP5';
import React from 'react';

const EventDetails = () => {
  return (
    <Layout pageTitle="Events Details">
      <PageHeader pageTitle="Events Details" />
      <EventsDetailsPage data={eventsDetails5} />
    </Layout>
  );
};

export default EventDetails;
