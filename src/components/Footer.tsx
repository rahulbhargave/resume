import React from "react";
import { ISocial } from "../types/ISocial";

const Footer: React.FC<any> = ({main}) => {
  const { social } = main;

  var networks = social.map((network:ISocial)=>{
    return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
  })
  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">{networks}</ul>

          <ul className="copyright">
            <li>&copy; Copyright 2021 Rahul Bhargave</li>
          </ul>
        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
