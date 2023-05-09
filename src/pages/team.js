import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import MeetTheTeam from "@/components/MeetTheTeam/MeetTheTeam";
import React from "react";

const Volunteers = () => {
  return (
    <Layout pageTitle="Home Three">
      <PageHeader pageTitle="Meet the Team" />
      <MeetTheTeam className="team-page" />
    </Layout>
  );
};

export default Volunteers;
