import workPackages from "@/data/workPackages";
import React from "react";
import { Container, Row } from "react-bootstrap";
import SingleWorkPackage from "../WorkPackagesPage/SingleWorkPackage";

const WorkPackages = () => {
  return (
    <section className="work-packages-page">
      <Container>
        <Row>
          {workPackages.map((news) => (
            <SingleWorkPackage key={news.id} news={news} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default WorkPackages;
