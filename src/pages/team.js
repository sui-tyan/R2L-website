import Layout from '@/components/Layout/Layout';
import PageHeader from '@/components/PageHeader/PageHeader';
import MeetTheTeam from '@/components/MeetTheTeam/MeetTheTeam';
import React from 'react';
import bg from '@/images/backgrounds/page-header-bg-1-4.jpg';

const Volunteers = () => {
  return (
    <Layout pageTitle="Meet the Team">
      <PageHeader header={bg} pageTitle="Meet the Team" />
      <MeetTheTeam className="team-page" />
    </Layout>
  );
};

export default Volunteers;
