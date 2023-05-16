import Link from "next/link";
import React from "react";
import { Col, Image } from "react-bootstrap";

const SingleWorkPackage = ({ news = {} }) => {
  const { id, image, date, title, description, author, comments } = news;

  return (
    <Col xl={4} lg={4} className="animated fadeInUp">
      <div className="workpkg__single">
        <div className="workpkg__img-box">
          <div className="workpkg__img">
            <Image src={require(`@/images/blog/${image}`).default.src} alt="" />
            <Link href={news.detailUrl}>
              <a>
                <i className="fa fa-plus"></i>
              </a>
            </Link>
          </div>
          {/* <div className="workpkg__date">
            <p>{date}</p>
          </div> */}
        </div>
        <div className="workpkg__content">
          {/* <ul className="list-unstyled workpkg__meta">
            <li>
              <a href="#">
                <i className="far fa-user-circle"></i> {author}
              </a>
            </li>
            <li>
              <span>/</span>
            </li>
            <li>
              <a href="#">
                <i className="far fa-comments"></i> {comments} sds
              </a>
            </li>
          </ul> */}
          <h3>
            <Link href={news.detailUrl}>{title}</Link>
          </h3>
          <p className="workpkg__text">{description}</p>
        </div>
      </div>
    </Col>
  );
};

export default SingleWorkPackage;
