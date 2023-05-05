import inspireData from '@/data/inspireData';
import bg from '@/images/backgrounds/we-inspire-bg.jpg';
import image from '@/images/resources/we-inspire-img.jpg';
import React, { useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

const WeInspire = () => {
  const [expand, setExpand] = useState(1);

  return (
    <section className="we-inspire">
      <div className="we-inspire-bg" style={{ backgroundImage: `url(${bg.src})` }}></div>
      <div className="we-inspire-bg-overlay"></div>
      <Container>
        <Row>
          <Col xl={6} lg={6}>
            <div className="we-inspire__left">
              <div className="section-title text-left">
                <span className="section-title__tagline">
                  Frequently Asked Questions
                </span>
                <h2 className="section-title__title">
                  Insert tagline of the company or website
                </h2>
              </div>
              <div className="we-inspire__faq">
                <div style={{ overflow: 'hidden' }} className="accordion-grp faq-one-accordion">
                  {inspireData.map(({ id, answer, question }) => (
                    <div className={expand === id ? 'accordion active' : 'accordion'} key={id}>
                      <div onClick={() => setExpand(id)} className="accordion-title">
                        <h4>{question}</h4>
                      </div>
                      {expand === id && (
                        <div className="accordion-content animated slideInUp">
                          <div className="inner">
                            <p>{answer}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Col>
          <Col xl={6} lg={6}>
            <div className="we-inspire__right">
              <div className="we-inspire__img">
                <Image src={image.src} alt="" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WeInspire;
