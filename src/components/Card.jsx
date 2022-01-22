import React from "react";
import "./Card.css";

/**
 * This is a composition class represents a container for this application according to Composition practice.
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function Card(props) {
  const classes = `card ${props.className}`;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
