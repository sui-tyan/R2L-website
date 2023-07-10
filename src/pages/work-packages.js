import Layout from '@/components/Layout/Layout';
import WorkPackages from '@/components/WorkPackagesPage/WorkPackagesPage';
import PageHeader from '@/components/PageHeader/PageHeader';
import React from 'react';

const News = () => {
  return (
    <Layout pageTitle="Work Packages">
      <PageHeader pageTitle="Work Packages" />
      <WorkPackages />
    </Layout>
  );
};

export default News;
