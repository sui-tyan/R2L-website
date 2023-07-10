import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import WorkPackageDetailsLeft from './WorkPackageDetailsLeft';
import Sidebar from './Sidebar';

const NewsDetailsPage = () => {
  return (
    <section className="workpkg-news-details">
      <Container>
        <Row>
          <Col xl={8} lg={7}>
            <WorkPackageDetailsLeft />
          </Col>
          <Col xl={4} lg={5}>
            <Sidebar />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NewsDetailsPage;
