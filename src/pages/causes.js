import CausesPage from "@/components/CausesPage/CausesPage";
import Funding from "@/components/Funding/Funding";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";

const Causes = () => {
  return (
    <div>
      {/* <Funding></Funding> */}
      <Layout pageTitle="Home Three">
        <PageHeader pageTitle="Causes" />
        <CausesPage />
      </Layout>
    </div>
  );
};

export default Causes;
