import React from "react";
import { Card } from "react-bootstrap";
import "./TeamCard.css";

function TeamCard(props) {
  return (
    <Card className="team-card" style={{ width: "25rem" }}>
      <Card.Body className="card-content">
        <Card.Img className="team-icon" src="images/grey-bg.jpg"></Card.Img>
        <Card.Title className="team-title">First Name</Card.Title>
        <Card.Subtitle className="team-h2 mb-2 text-muted">
          Position Title
        </Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default TeamCard;
