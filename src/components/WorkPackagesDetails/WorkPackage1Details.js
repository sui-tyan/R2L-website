import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CausesDetailsLeft from "./WorkPackage1Left";
import CausesDetailsRight from "./WorkPackage1Right";

const WorkPackage1Details = (data) => {
  return (
    <section className="causes-details">
      <Container>
        <Row>
          <Col xl={8} lg={7}>
            <CausesDetailsLeft data={data.data} />
          </Col>
          <Col xl={4} lg={5}>
            <CausesDetailsRight data={data.data} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WorkPackage1Details;
