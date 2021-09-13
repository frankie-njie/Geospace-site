import React from "react";
import { Row, Col, Accordion, Form, FloatingLabel } from "react-bootstrap";
import Banner from "../../components/banner/Banner";
import ButtonMain from "../../components/Buttons/ButtonMain";
import "./Contact.css";

function Contact() {
  return (
    <div>
      <Banner head="Contact Us" />
    <div className="contact-content">
      <h2>Get In Touch</h2>
      <Row className="info-contact">
        <Col md={6} className="faq">
          <h3>Frequently Asked Questions</h3>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Question 1</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>

        <Col md={6} className="contact-info mb-4">
          <div className="address">
            <h3>Contact Information</h3>
            <div>
              <p><i className="fas add-fab fa-mobile-alt fa-lg"></i>647478383</p>
              <p><i className="fas add-fab fa-phone-alt fa-lg"></i>847937237</p>
              <p><i className="fas add-fab fa-envelope fa-lg"></i>geospace@gmail.com</p>
              <p><i className="fas add-fab fa-map-marker-alt fa-lg"></i>Douala, Cameroon</p>
            </div>
          </div>
          <div className="social-media">
            <h3>Social Media</h3>
            <div>
              <p><i className="fab add-fab fa-facebook fa-lg"></i>Geospace_facebook</p>
              <p><i className="fab add-fab fa-whatsapp fa-lg"></i>Geospace_whatsapp</p>
              <p><i className="fab add-fab fa-twitter fa-lg"></i>Geospace_twitter</p>
              <p><i className="fab add-fab fa-instagram fa-lg"></i>Geospace_instagram</p>
            </div>
          </div>
        </Col>
      </Row>
      <hr />
      <Row className="info-locate mb-5">
        <Col className="location" md={6}>
          <h3>Locate Us</h3>
          <img src="images/grey-bg.jpg" alt="" width="100%" height="500px" />
        </Col>
        <Col md={6} className="question-form">
            <h3>Ask Us Anything</h3>
            <Form>
              <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingInputCustom"
                  type="text"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInputCustom">Enter Name</label>
              </Form.Floating>
              <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingPasswordCustom"
                  type="email"
                  placeholder="Password"
                />
                <label htmlFor="floatingPasswordCustom">Enter Email</label>
              </Form.Floating>
              <FloatingLabel className="mb-3" controlId="floatingTextarea2" label="Ask Question">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "150px" }}
                />
              </FloatingLabel>
              <ButtonMain btnValue="Send Message" />
            </Form>
        </Col>
      </Row>
    </div>
    </div>
  );
}

export default Contact;
