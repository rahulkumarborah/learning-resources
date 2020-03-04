import "./Main.scss";

import React from "react";
import { ReactTinyLink } from "react-tiny-link";
import desktopImage from "../../assets/img/desktop.jpg";
import { learningResources } from "./MainConstants";

function Main() {
  return (
    <div className="main-container">
      {learningResources.map((resource, resourceIndex) => {
        return (
          <div className="resource-container" key={`resource-${resourceIndex}`}>
            <h2>{resource.title}</h2>
            <div className="url-tiny-links-container">
              {resource.links.map((link, linkIndex) => {
                return (
                  <ReactTinyLink
                    key={`link-${linkIndex}`}
                    cardSize="large"
                    showGraphic={true}
                    maxLine={2}
                    minLine={1}
                    defaultMedia={desktopImage}
                    url={link.url}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Main;
