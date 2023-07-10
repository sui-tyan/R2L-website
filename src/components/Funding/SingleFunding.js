import React from 'react';
import { Col, Image } from 'react-bootstrap';

const SingleFunding = ({ funding = {} }) => {
  const { image, title, category } = funding;
  return (
    // <Col xl={3} lg={6} md={6}>
    <Col xl="auto" md="auto" xs="auto">
      <div className="funding-section__single">
        <div className="funding-section__img-box">
          <Image
            src={require(`@/images/funding/${image}`).default.src}
            alt=""
          />
        </div>
      </div>
    </Col>
  );
};

export default SingleFunding;
