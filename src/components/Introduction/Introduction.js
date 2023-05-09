import introduction from "@/data/introduction";
import image from "@/images/resources/introduction-img-1.jpg";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const Introduction = () => {
  return (
    <section className="introduction">
      <Container>
        <Row>
          <Col xl={6} lg={6}>
            <div className="introduction__left">
              <div className="introduction__img">
                <Image src={image.src} alt="" />
              </div>
              <div className="introduction__content">
                <p className="introduction__text">
                  Members of the R2L project, working together to promote youth
                  leadership and civic engagement in their communities.
                </p>
              </div>
            </div>
          </Col>
          <Col xl={6} lg={6}>
            <div className="introduction__right">
              <div className="section-title text-left">
                <span className="section-title__tagline">
                  Our Introductions
                </span>
                <h2 className="section-title__title">Rights to Life</h2>
              </div>
              <p className="introduction__right-text">
                The Philippines is currently experiencing a worsening disregard
                for the rule of law and human rights, which includes
                extra-judicial killings and illegal arrests. The University of
                the Cordilleras aims to promote a responsive criminal justice
                system through education and research, leading to intermediate
                changes in human rights-based education, research and
                development, community outreach, competent faculty and students,
                multi-stakeholder partnerships, and well-equipped resources.
              </p>
              <ul className="introduction__icon-wrap list-unstyled">
                {introduction.map(({ id, title, description, icon }) => (
                  <li className="introduction__icon-wrap-single" key={id}>
                    <div className="introduction__icon-box">
                      <span className={icon}></span>
                    </div>
                    <div className="introduction__content-box">
                      <h2>{title}</h2>
                      <p>{description}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <a href="#" className="introduction__btn thm-btn">
                <i className="fas fa-arrow-circle-right"></i>Learn More
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Introduction;
