import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { IPortfolio } from "../types/IPortfolio";
import { IMainInfo } from "../types/IMainInfo";

const Portfolio: React.FC<any> = ({ projects }) => {
  const main: IMainInfo = useSelector((state: RootState) => state.data.main);
  const { social } = main;
  const gitProfile = social.find((item) => item.name === "github");

  const allProjects =
    projects &&
    projects.length > 0 &&
    projects.map((project: IPortfolio) => {
      return (
        <div key={project.node_id} className="columns portfolio-item">
          <div className="item-wrap">
            <a
              href={project.html_url}
              title={project.name}
              target="_blank"
              rel="noreferrer"
            >
              <h5>{project.name}</h5>
              <i className="fa fa-link"></i>
            </a>
          </div>
        </div>
      );
    });

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div
            id="portfolio-wrapper"
            className="bgrid-thirds s-bgrid-thirds cf"
          >
            {allProjects}
            <div key="seeMore" className="columns portfolio-item">
              <div className="item-wrap">
                <a
                  href={gitProfile?.url}
                  title="Check more..."
                  target="_blank"
                  rel="noreferrer"
                >
                  <h5>Check more...</h5>
                  <i className="fa fa-link"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
