import WorkPackage1Details from '@/components/WorkPackagesDetails/WorkPackage1Details';
import Layout from '@/components/Layout/Layout';
import PageHeader from '@/components/PageHeader/PageHeader';
import React from 'react';
import workPackage5Details from '@/data/workPackage5Details';

const CausesDetails = () => {
  return (
    <Layout pageTitle="Work Package 5">
      <PageHeader pageTitle="Work Package 5" />
      <WorkPackage1Details
        data={workPackage5Details}
        eventUrl={'/event-details-wp5'}
      />
    </Layout>
  );
};

export default CausesDetails;
