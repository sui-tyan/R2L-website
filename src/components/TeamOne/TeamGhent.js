import teamGhent from "@/data/teamGhent";
import React from "react";
import { Container, Row } from "react-bootstrap";
import SingleTeamOne from "./SingleTeamOne";

const TeamGhent = ({ className = "" }) => {
  return (
    <section className={`team-one ${className}`}>
      <Container>
        {!className && (
          <div className="section-title text-center">
            <span className="section-title__tagline">
              Professional Volunteers
            </span>
            <h2 className="section-title__title">
              Meet the best team behind <br /> our success story
            </h2>
          </div>
        )}
        <Row>
          {teamGhent.slice(0, className ? undefined : 3).map((team) => (
            <SingleTeamOne key={team.id} team={team} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TeamGhent;
