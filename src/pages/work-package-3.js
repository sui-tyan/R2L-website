import WorkPackage1Details from '@/components/WorkPackagesDetails/WorkPackage1Details';
import Layout from '@/components/Layout/Layout';
import PageHeader from '@/components/PageHeader/PageHeader';
import React from 'react';
import workPackage3Details from '@/data/workPackage3Details';

const CausesDetails = () => {
  return (
    <Layout pageTitle="Work Package 1">
      <PageHeader pageTitle="Work Package 1" />
      <WorkPackage1Details data={workPackage3Details} />
    </Layout>
  );
};

export default CausesDetails;
