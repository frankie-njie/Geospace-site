import React from "react";
import { Card } from "react-bootstrap";
import "./Accolades.css";

function Accolades() {
  return (
    <div className="recognition-items">
      <Card.Img
        className="accolades-icon"
        src="images/grey-bg.jpg"
        alt="achievement"
      />
      <Card.Title>Special title treatment</Card.Title>
      <Card.Text>
        With supporting text below as a natural lead-in to additional content.
      </Card.Text>
    </div>
  );
}

export default Accolades;
