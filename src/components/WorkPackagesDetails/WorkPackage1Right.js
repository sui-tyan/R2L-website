import organizer from "@/images/resources/causes-details-organizar-img-1.jpg";
import React from "react";
import { Image } from "react-bootstrap";

const CausesDetailsRight = (data) => {
  const activities = data.data.sidebar.activities;
  const lead = data.data.sidebar.lead;

  return (
    <div className="causes-details__right">
      <div className="causes-details__organizer">
        <div className="causes-details__organizer-img">
          <Image src={organizer.src} alt="" />
        </div>
        <div className="causes-details__organizer-content">
          <p>Created 20 Jan, 2021</p>
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
        <h3 className="causes-details__donations-title">Recent Donations</h3>
        <ul className="list-unstyled causes-details__donations-list">
          {activities.map(({ id, amount, image, name, text, time }) => (
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
                  {name} <span>{time}</span>
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
