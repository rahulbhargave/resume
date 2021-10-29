import React from "react";

const About: React.FC<any> = ({ main }) => {
  const { name, image, bio, phone, address, email, resumedownload } = main;
  const { street, city, state, zip, country } = address;

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={process.env.REACT_APP_BASE_URL + "/" + image}
            alt={name + " Profile Pic"}
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>{bio}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span>
                <br />
                <span>
                  {street}
                  <br />
                  {city},
                  <br />
                  {state}, {country} {zip}
                </span>
                <br />
                <span>{phone}</span>
                <br />
                <span>
                  <a href={"mailto:" + email}>{email}</a>
                </span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a
                  href={`${process.env.REACT_APP_BASE_URL}/${resumedownload}`}
                  target="_blank"
                  rel="noreferrer"
                  className="button"
                >
                  <i className="fa fa-download"></i>Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
