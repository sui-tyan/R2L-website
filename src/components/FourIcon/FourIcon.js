import fourIcons from "@/data/fourIcons";
import React from "react";
import Link from "next/link";
import { Col, Container, Image, Row } from "react-bootstrap";

const FourIcon = () => {
  return (
    <section className="four-icon">
      <Container>
        <Row>
          {fourIcons.map(({ id, title, icon, description, image, url }) => (
            <Col xl={4} lg={6} md={6} className="fadeInUp" key={id}>
              <Link href={url} passHref>
                <div className="four-icon__single">
                  <div className="four-icon__img">
                    <Image
                      src={require(`@/images/resources/${image}`).default.src}
                      alt=""
                    />
                    <div className="four-icon__content-box">
                      <h3 className="four-icon__title">{title}</h3>
                      <p className="four-icon__text">{description}</p>
                    </div>
                  </div>
                  <div className="four-icon__bottom-icon">
                    {(() => {
                      const Icon = icon;
                      return Icon ? <Icon size={95} stroke={1}></Icon> : "";
                    })()}
                  </div>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FourIcon;
