import fundingData from "@/data/fundingData";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleFunding from "./SingleFunding";

const Funding = () => {
  return (
    // <section className="gallery-page">
    <section className="funding-section">
      <Container className="funding-section__container">
        <Row className="justify-content-xl-center">
          {fundingData.map((funding) => (
            <Col md={4} sm={12}>
              <SingleFunding key={funding.id} funding={funding} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Funding;
