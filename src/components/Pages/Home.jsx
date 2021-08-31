import React from "react";
import { Col, Row, Form } from "react-bootstrap";
import ButtonMain from "../Buttons/ButtonMain";
import Features from "../Cards/FeatureCard";
import ServiceCard from "../Cards/ServiceCard";
import ProductCard from "../Cards/ProductCard";


import './Home.css'

function Home(props) {
  return (
    <div>
      <div className="landing mb-4">
        <h3>WELCOME TO</h3>
        <h1>GEOSPACE AFRICA LTD</h1>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        <div className="landing-buttons">
          <ButtonMain type="main" path="/products"  btnValue="Products" />
          <ButtonMain type="outline" path="/services" btnValue="Our Services" />
        </div>
      </div>

      <div className="product_features mb-4">
        <h2>Features of Products </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        <Row  className="features">
          <Col md={4}>
            <Features />
            <Features />
            <Features />
          </Col>
          <Col md={4}>
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
          <Col md={4}>
            <Features />
            <Features />
            <Features />
          </Col>
        </Row>
      </div>

      <div className="our-services mb-4">
        <h2>Our Services</h2>
        <p>
          With supporting text below as a natural lead-in to additional content.
        </p>

        <div className=" services d-flex flex-wrap">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>

      <div className="contents">
        <div className="about_geospace">
          <h2>What You need to know About GeoSpace</h2>
          <Row className="about-row">
            <Col>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Posuere sollicitudin aliquam ultrices sagittis. Consectetur
                adipiscing elit duis tristique sollicitudin nibh sitamet.
                Laoreet non curabitur gravida arcu ac tortor dignissim. Auctor
                eu augue ut lectus arcu bibendum at varius. Id velit ut tortor
                pretium. Scelerisque mauris pellentesque pulvinar pellentesque
                habitant morbi. Viverra accumsan in nisl nisiscelerisque eu
                ultrices vitae auctor. Leo vel orci porta non pulvinar neque
                laoreet. Quam id leo in vitae turpis massa. Eget felis eget nunc
                lobortis. Quis eleifend quam adipiscing vitae proin sagittis
                nisl rhoncus mattis. Nec dui nuncmattis enim. Blandit cursus
                risus at ultrices. A iaculis at erat pellentesque adipiscing
                commodo elit. Lectus arcu bibendum at varius. Egestas diam in
                arcu cursus euismod quis. Volutpat lacus laoreet non curabitur
                gravida arcu. Vitae elementum curabitur vitae nunc sed velit
                dignissim sodales. Mauris in aliquam sem fringilla ut morbi. Sed
                ullamcorper morbi tincidunt ornare massa eget egestas. Aliquam
                etiam erat velit scelerisque in dictum non consectetur a. Non
                sodales neque sodales ut etiam sit amet nisl.
              </p>
              <ButtonMain type="alt" path="/about" btnValue="learn More" />
            </Col>
            <Col>
              <img src="images/grey-bg.jpg" alt="" width="100%" height="100%" />
            </Col>
          </Row>
        </div>
      </div>

      <div className="product-contents">
        <div className="products mb-4">
          <h2>Products</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="some_products d-flex flex-wrap">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          <ButtonMain type="main" path="/products" btnValue="View More" />
        </div>
      </div>

      <div className="partners mb-4">
        <h2>Our Partners</h2>
        <div className="partners-div d-flex">
          <img
            className="partner_img"
            src="images/grey-bg.jpg"
            alt=""
            width="250px"
            height="120px"
          />
          <img
            className="partner_img"
            src="images/grey-bg.jpg"
            alt=""
            width="250px"
            height="120px"
          />
          <img
            className="partner_img"
            src="images/grey-bg.jpg"
            alt=""
            width="250px"
            height="120px"
          />
          <img
            className="partner_img"
            src="images/grey-bg.jpg"
            alt=""
            width="250px"
            height="120px"
          />
        </div>
      </div>

      <div className="contact_contents">
        <div className="get_in_touch">
          <h2>Get In Touch</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Row className="contact-form">
            <Col className="">
              <Form className="form-group ">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    as="textarea"
                    rows={8}
                    placeholder="Send Message"
                  />
                </Form.Group>
                <ButtonMain type="main" btnValue="Send Message" />
              </Form>
            </Col>
            <Col>
              <img src="images/grey-bg.jpg" alt="" width="100%" height="100%" />
            </Col>
          </Row>
        </div>
      </div>

      <div className="works mb-4">
        <h2>We have Worked With</h2>
        <div className="works_img d-flex">
          <img
            className="single-partner"
            src="images/grey-bg.jpg"
            alt=""
            width="150px"
            height="100px"
          />
          <img
            className="single-partner"
            src="images/grey-bg.jpg"
            alt=""
            width="150px"
            height="100px"
          />
          <img
            className="single-partner"
            src="images/grey-bg.jpg"
            alt=""
            width="150px"
            height="100px"
          />
          <img
            className="single-partner"
            src="images/grey-bg.jpg"
            alt=""
            width="150px"
            height="100px"
          />
          <img
            className="single-partner"
            src="images/grey-bg.jpg"
            alt=""
            width="150px"
            height="100px"
          />
          <img
            className="single-partner"
            src="images/grey-bg.jpg"
            alt=""
            width="150px"
            height="100px"
          />
          <img
            className="single-partner"
            src="images/grey-bg.jpg"
            alt=""
            width="150px"
            height="100px"
          />
          <img
            className="single-partner"
            src="images/grey-bg.jpg"
            alt=""
            width="150px"
            height="100px"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
