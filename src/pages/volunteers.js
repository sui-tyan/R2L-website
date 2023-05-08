import BecomeVolunteer from "@/components/BecomeVolunteer/BecomeVolunteer";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import TeamGhent from "@/components/TeamOne/TeamGhent";
import TeamUC from "@/components/TeamOne/TeamUC";
import React from "react";

const Volunteers = () => {
  return (
    <Layout pageTitle="Meet the Team">
      <PageHeader pageTitle="Meet the Team" />
      <BecomeVolunteer />
      <TeamGhent className="team-page" />
      <BecomeVolunteer />
      <TeamUC className="team-page" />
    </Layout>
  );
};

export default Volunteers;
