import React from "react";
import { Col, Row } from "react-bootstrap";
import Features from "../cards/FeatureCard";

function FeatureComp(props) {
  const productFeatures = props.features
  const midpoint = productFeatures.length/2

  // let[title, icon, description] = productFeatures
    // console.log(title);
    // console.log(icon);
    // console.log(description);

    // productFeatures.forEach(product => {
    //   console.log(product);
    // }); 

  return (
    <div>
      <Row className="feature-div">
        <Col md={4} sm={12}>
          {productFeatures.map((feature, i) => {
            if(i < midpoint) {
              return (
                <Features key={i} title={feature.title} desc={feature.description} icon={feature.icon} />
              )
            }
          })}
        </Col>
        <Col md={4} sm={12}>
          <div className="feature-imgdiv">
            <img
              className="feature-img"
              src={props.featureImg}
              width="100%"
              height="100%"
              alt=""
            />
          </div>
        </Col>
        <Col md={4} sm={12}>
        {productFeatures.map((feature, i) => {
            if(i >= midpoint) {
              return (
                <Features key={i} title={feature.title} desc={feature.description} icon={feature.icon}/>
              )
            }
          })}
        </Col>
      </Row>
    </div>
  );
}

export default FeatureComp;


 