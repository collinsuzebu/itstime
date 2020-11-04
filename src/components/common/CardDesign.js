import React from "react";
import { Link } from "react-router-dom";

import "./CardDesign.css";

const CardDesign = ({ title, image, link }) => (
  <>
    <div className="card card__effect">
      <div className="card__top">
        <img src={image} alt={title} />
      </div>
      <div className="card__bottom">
        <Link to={link}>
          <p>{title}</p>
        </Link>
      </div>
    </div>
  </>
);

export default CardDesign;
