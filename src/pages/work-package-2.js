import WorkPackage1Details from '@/components/WorkPackagesDetails/WorkPackage1Details';
import Layout from '@/components/Layout/Layout';
import PageHeader from '@/components/PageHeader/PageHeader';
import React from 'react';
import workPackage2Details from '@/data/workPackage2Details';

const CausesDetails = () => {
  return (
    <Layout pageTitle="Work Package 2">
      <PageHeader pageTitle="Work Package 2" />
      <WorkPackage1Details
        data={workPackage2Details}
        eventUrl={'/event-details-wp2'}
      />
    </Layout>
  );
};

export default CausesDetails;
