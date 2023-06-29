import WorkPackage1Details from "@/components/WorkPackagesDetails/WorkPackage1Details";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";
import workPackage6Details from "@/data/workPackage6Details";

const CausesDetails = () => {
  return (
    <Layout pageTitle="Work Package 1">
      <PageHeader pageTitle="Work Package 1" />
      <WorkPackage1Details
        data={workPackage6Details}
        eventUrl={"/event-details-wp6"}
      />
    </Layout>
  );
};

export default CausesDetails;
