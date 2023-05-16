import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CausesDetailsLeft from "./WorkPackage1Left";
import CausesDetailsRight from "./WorkPackage1Right";

const WorkPackage1Details = () => {
  return (
    <section className="causes-details">
      <Container>
        <Row>
          <Col xl={8} lg={7}>
            <CausesDetailsLeft />
          </Col>
          <Col xl={4} lg={5}>
            <CausesDetailsRight />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WorkPackage1Details;
