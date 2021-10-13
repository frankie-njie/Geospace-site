import React from "react";
import { Row, Col } from "react-bootstrap";
import Banner from "../../components/banner/Banner";
import Accolades from "../../components/Others/Accolades";
import TeamCard from "../../components/cards/TeamCard";

import "./About.css";
import ButtonMain from "../../components/Buttons/ButtonMain";

function About() {
  return (
    <div>
      <Banner head="About us" src="images/aboutBanner.jpg" />

      <div className="to_know">
        <h2>What to Know About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere
          sollicitudin aliquam ultrices sagittis. Consectetur adipiscing elit
          duis tristique sollicitudin nibh sit amet. Laoreet non curabitur
          gravida arcu ac tortor dignissim. Auctor eu augue ut lectus arcu
          bibendum at varius. Id velit ut tortor pretium. Scelerisque mauris
          pellentesque pulvinar pellentesque habitant morbi. Viverra accumsan in
          nisl nisi scelerisque eu ultrices vitae auctor. Leo vel orci porta non
          pulvinar neque laoreet. Quam id leo in vitae turpis massa. Eget felis
          eget nunc lobortis. Quis eleifend quam adipiscing vitae proin sagittis
          nisl rhoncus matti
        </p>
      </div>

      <div className="word_from_founder">
        <div className="founder_contents">
          <h2>Word From Founder</h2>
          <div className="d-flex founder-details">
            <img
              className="founder-img"
              src="images/grey-bg.jpg"
              alt=""
              width="100%"
              height="100%"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Posuere sollicitudin aliquam ultrices sagittis. Consectetur
              adipiscing elit duis tristique sollicitudin nibh sit amet. Laoreet
              non curabitur gravida arcu ac tortor dignissim. Auctor eu augue ut
              lectus arcu bibendum at varius. Id velit ut tortor pretium.
              Scelerisque mauris pellentesque pulvinar pellentesque habitant
              morbi. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae
              auctor. Leo vel orci porta non pulvinar neque laoreet. Quam id leo
              in vitae turpis massa. Eget felis eget nunc lobortis. Quis
              eleifend quam adipiscing vitae proin sagittis nisl rhoncus matti
            </p>
          </div>
        </div>
      </div>

      <div className="recognition d-flex justify-content-center">
        <Accolades />
        <Accolades />
        <Accolades />
      </div>

      <div className="our_mission">
        <h2>Our Mission</h2>
        <Row className="our_mission_contents">
          <Col>
            <img src="images/about/mission-div1.jpg" alt="" width="100%" height="100%" />
          </Col>
          <Col>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Posuere sollicitudin aliquam ultrices sagittis. Consectetur
              adipiscing elit duis tristique sollicitudin nibh sit amet. Laoreet
              non curabitur gravida arcu ac tortor dignissim. Auctor eu augue ut
              lectus arcu bibendum at varius. Id velit ut tortor pretium.
              Scelerisque mauris pellentesque pulvinar pellentesque habitant
              morbi. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae
              auctor. Leo vel orci porta non pulvinar neque laoreet. Quam id leo
              in vitae turpis massa. Eget felis eget nunc lobortis. Quis
              eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis.
            </p>
          </Col>
        </Row>

        <Row className="our_mission_contents num_2">
          <Col>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Posuere sollicitudin aliquam ultrices sagittis. Consectetur
              adipiscing elit duis tristique sollicitudin nibh sit amet. Laoreet
              non curabitur gravida arcu ac tortor dignissim. Auctor eu augue ut
              lectus arcu bibendum at varius. Id velit ut tortor pretium.
              Scelerisque mauris pellentesque pulvinar pellentesque habitant
              morbi. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae
              auctor. Leo vel orci porta non pulvinar neque laoreet. Quam id leo
              in vitae turpis massa. Eget felis eget nunc lobortis. Quis
              eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis.
            </p>
          </Col>
          <Col>
            <img src="images/about/mission-div.jpg" alt="" width="100%" height="100%" />
          </Col>
        </Row>
      </div>

      <div className="team">
        <div className="team-contents">
          <h2>Meet the Team</h2>
          <div className="team-features d-flex ">
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
          </div>
        </div>
      </div>

      <div className="explore-more">
        <h2>Explore and Learn More</h2>
        <div>
          <Row className="explore-img">
            <Col>
              <img
                className="img"
                src="images/about/productslink.jpg"
                alt=""
                width="100%"
                height="100%"
              />
            </Col>
            <Col>
              <img
                className="img"
                src="images/about/serviceslink.jpg"
                alt=""
                width="100%"
                height="100%"
              />
            </Col>
            </Row>
            <hr className="hr" />
            <div className="explore-contact">
              <h2>Get In Touch</h2>
              <p>
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and expound the actual
                teachings of the great explorer of the truth, the master-builder
                of human happiness. No one rejects, dislikes, or avoids pleasure
                itself, because it is pleasure, but because those whoundefined
              </p>

              <ButtonMain btnValue="Contact Us" path="/contact" />
            </div>
        </div>
      </div>
    </div>
  );
}

export default About;
