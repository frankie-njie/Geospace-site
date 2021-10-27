import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <Container className="footer-content">
        <Row className="footer-main">
          <Col className="footer-body">
            <div>
              <h5 className="footer-h5">Geospace Africa Ltd</h5>
              <p className="footer-details">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur ipsam aliquid sunt est. Architecto ut exercitationem
                provident nemo! A libero, error saepe consequatur quaerat
                praesentium est nisi quas provident ad.
              </p>
            </div>
          </Col>
          <Col className="footer-body">
            <h5 className="footer-h5">Quick Links</h5>
            <div>
              <p className="footer-details">
                <Link to="/products">Products</Link>
              </p>
              <p className="footer-details">
                <Link to="/services">Services</Link>
              </p>
              <p className="footer-details">
                <Link to="/about">About Us</Link>
              </p>
              <p className="footer-details">
                <Link to="/contact">Contact</Link>
              </p>
              <p className="footer-details">
                <Link to="/portfolio">Portfolio</Link>
              </p>
              <Link to="2/productsdesc">SingleProud</Link>
            </div>
          </Col>
          <Col className="footer-body">
            <h5 className="footer-h5">Help Center</h5>
            <div>
              <p className="footer-details">FAQ</p>
              <p className="footer-details">Terms and Conditions</p>
              <p className="footer-details">Refund Policy</p>
              <p className="footer-details">Pricacy</p>
              <p className="footer-details">Tracking</p>
              <Link to="/singleservice">Single Service</Link>
            </div>
          </Col>
          <Col className="footer-body">
            <h5 className="footer-h5">Address</h5>
            <div>
              <p className="footer-details">+237 674 32 32 00</p>
              <p className="footer-details">+237 699 92 12 09</p>
              <p className="footer-details">+237 222 23 09 01</p>
              <p className="footer-details">geospace@gmail.com</p>
              <p className="footer-details">Douala, Cameroon</p>
            </div>
          </Col>
        </Row>
        <Row>
          <div className="footer-icons">
            <a href="https://www.facebook.com/geospaceafrica/" className="me-4 text-reset">
              <i className="fab fab-foot fa-facebook-f fa-lg"></i>
            </a>
            <a href="https://twitter.com/geospaceltd" className="me-4 text-reset">
              <i className="fab fab-foot fa-twitter fa-lg"></i>
            </a>
            <a href="https://www.instagram.com/geospaceafrica/" className="me-4 text-reset">
              <i className="fab fab-foot fa-instagram fa-lg"></i>
            </a>
            <a href="https://www.linkedin.com/company/geospace-africa-ltd/about/" className="me-4 text-reset">
              <i className="fab fab-foot fa-linkedin fa-lg"></i>
            </a>
          </div>
        </Row>
      </Container>
      <div className="footer-copyright">
        @2021 Copyright <a href="/">Geospace Africa</a>
      </div>
    </footer>
  );
}

export default Footer;
