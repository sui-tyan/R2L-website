import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Volunteer = () => {
  return (
    <section className="become-volunteer">
      <Container>
        <Row>
          <Col xl={12}>
            <div className="become-volunteer__inner">
              <div className="become-volunteer__left">
                <h2>
                  Insert a tagline <br /> for the company or website
                </h2>
                <div className="become-volunteer__big-text">
                  <h2>Insert another tagline here</h2>
                </div>
              </div>
              <div className="become-volunteer__btn-box">
                <a href="#" className="become-volunteer__btn thm-btn">
                  <i className="fas fa-arrow-circle-right"></i>Learn More
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Volunteer;
