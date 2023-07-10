import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CausesDetailsLeft from './WorkPackage1Left';
import CausesDetailsRight from './WorkPackage1Right';

const WorkPackage1Details = ({ data, eventUrl }) => {
  console.log(data);
  console.log(eventUrl);
  return (
    <section className="causes-details">
      <Container>
        <Row>
          <Col xl={8} lg={7}>
            <CausesDetailsLeft data={data} />
          </Col>
          <Col xl={4} lg={5}>
            <CausesDetailsRight data={data} eventUrl={eventUrl} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WorkPackage1Details;
