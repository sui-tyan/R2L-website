import teamUC from "@/data/teamUC";
import React from "react";
import { Container, Row } from "react-bootstrap";
import SingleTeamOne from "./SingleTeamOne";

const TeamUC = ({ className = "" }) => {
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
          {teamUC.slice(0, className ? undefined : 3).map((team) => (
            <SingleTeamOne key={team.id} team={team} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TeamUC;
