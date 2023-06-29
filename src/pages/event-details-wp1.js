import EventsDetailsPage from '@/components/EventsDetailsPage/EventsDetailsPage';
import Layout from '@/components/Layout/Layout';
import PageHeader from '@/components/PageHeader/PageHeader';
import eventsDetails1 from '@/data/eventsDetailsWP1';
import React from 'react';

// import { useSearchParams } from 'next/navigation';

const EventDetails = () => {
  // const router = useSearchParams();
  // console.log(router);
  return (
    <Layout pageTitle="Events Details">
      <PageHeader pageTitle="Events Details" />
      <EventsDetailsPage data={eventsDetails1} />
    </Layout>
  );
};

export default EventDetails;
