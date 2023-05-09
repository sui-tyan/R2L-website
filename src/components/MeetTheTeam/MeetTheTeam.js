import teamUC from "@/data/teamUC";
import React from "react";
import ucBannerData from "@/data/bannerDataUC";
import TeamSection from "./TeamSection";
import ghentBannerData from "@/data/bannerDataGhent";
import teamGhent from "@/data/teamGhent";

const MeetTheTeam = ({ className = "" }) => {
  return (
    // <section className={`team-one ${className}`}>
    <section>
      <TeamSection
        className={className}
        bannerData={ghentBannerData}
        teamData={teamGhent}
      ></TeamSection>
      <TeamSection
        className={className}
        bannerData={ucBannerData}
        teamData={teamUC}
      ></TeamSection>
    </section>
  );
};

export default MeetTheTeam;
