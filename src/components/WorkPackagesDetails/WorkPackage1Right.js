import React from "react";
import Link from "next/link";
import { Image } from "react-bootstrap";

const CausesDetailsRight = ({ data, eventUrl }) => {
  const activities = data.sidebar.activities;
  const lead = data.sidebar.lead;
  const organizerImg = data.sidebar.lead.image;

  return (
    <div className="causes-details__right">
      <div className="causes-details__organizer">
        <div className="causes-details__organizer-img">
          <Image src={organizerImg.src} alt="" width="100" />
        </div>
        <div className="causes-details__organizer-content">
          {/* <p>Created 20 Jan, 2021</p> */}
          <h5>
            Lead Person: <span>{lead.name}</span>
          </h5>
          <ul className="causes-details__organizer-list list-unstyled">
            <li>
              <i className="fas fa-map-marker-alt"></i>
              {lead.education}
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              {lead.location}
            </li>
          </ul>
        </div>
      </div>
      <div className="causes-details__donations">
        <h3 className="causes-details__donations-title">
          <a href="/news">News and Events</a>
        </h3>
        <ul className="list-unstyled causes-details__donations-list">
          {activities.map(({ id, amount, image, name, text }) => (
            <li key={id}>
              <div className="causes-details__donations-img">
                <Image
                  src={require(`@/images/resources/${image}`).default.src}
                  alt=""
                />
              </div>
              <div className="causes-details__donations-content">
                <h4>{amount}</h4>
                <h5>
                  <Link
                    href={{
                      pathname: eventUrl,
                      query: { id: id },
                    }}
                  >
                    <a>{name}</a>
                  </Link>
                </h5>
                <p>{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CausesDetailsRight;
