import React from "react";
import { ITestimonial } from "../types/ITestimonials";

const Testimonials: React.FC<any> = ({ testimonials }) => {
  const recommendations = testimonials.testimonials.map(
    (record: ITestimonial) => {
      return (
        <li key={record.user} className="recommendations__list-item">
          <div className="endorsement-card">
            <a
              href={record.url}
              target="_blank"
              rel="noreferrer"
              className="base-card base-card--link base-main-card base-main-card--link endorsement-card__entity"
            >
              <img
                className="artdeco-entity-image artdeco-entity-image--circle-4 lazy-loaded"
                alt={`Click here to view ${record.user}’s profile`}
                src={record.image}
              />
              <div className="base-main-card__info">
                <h3 className="base-main-card__title">{record.user}</h3>
                <h6 className="base-main-card__title">
                  {record.designation} {record.organization !== "" ? "at" : ""}{" "}
                  {record.organization}
                </h6>
                <div className="base-main-card__metadata">
                  <p className="endorsement-card__content">
                    {`“${record.text}”`}
                  </p>
                </div>
              </div>
            </a>
          </div>
        </li>
      );
    }
  );
  return (
    <section id="testimonials">
      <div className="text-container">
        <div className="row">
          <div className="two columns header-col">
            <h1>
              <span>Client Testimonials</span>
            </h1>
          </div>

          <div className="ten columns flex-container">
            <ul className="show-more-less__list show-more-less__list--no-hidden-elems">
              {recommendations}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
