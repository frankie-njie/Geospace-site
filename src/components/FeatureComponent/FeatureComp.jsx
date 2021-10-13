import React from "react";
import { Col, Row } from "react-bootstrap";
import Features from "../cards/FeatureCard";

function FeatureComp(props) {
  return (
    <div>
      <Row>
        <Col md={4} sm={12}>
          <Features />
          <Features />
          <Features />
        </Col>
        <Col md={4} sm={12}>
          <div className="feature-imgdiv">
            <img
              className="feature-img"
              src="images/grey-bg.jpg"
              width="100%"
              height="100%"
              alt=""
            />
          </div>
        </Col>
        <Col md={4} sm={12}>
          <Features />
          <Features />
          <Features />
        </Col>
      </Row>
    </div>
  );
}

export default FeatureComp;



const featruedProducts = []