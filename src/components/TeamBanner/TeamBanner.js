/**
 * adapted from becomevolunteer
 */

import React from "react";
import { Image, Col, Container, Row } from "react-bootstrap";

const TeamBanner = (props) => {
  return (
    <section className="team-banner">
      <div
        className="team-banner__bg"
        style={{
          backgroundImage: `url(${
            require(`@/images/teambanners/${props.data.bg}`).default.src
          })`,
        }}
      ></div>

      <Container>
        <Row>
          <Col xl={12}>
            <div className="team-banner__inner">
              <div className="team-banner__left">
                <h2>{props.data.name}</h2>
              </div>
              {/* <div className="team-banner__btn-box">
                <Link href="/volunteer">
                  <a className="team-banner__btn thm-btn">
                    <i className="fas fa-arrow-circle-right"></i>Learn More
                  </a>
                </Link>
              </div> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TeamBanner;
