import React, { useState, useEffect } from "react";
import { Col, Row, Form, Carousel, CardImg } from "react-bootstrap";
import ButtonMain from "../../components/Buttons/ButtonMain";
import Features from "../../components/cards/FeatureCard";
import ServiceCard from "../../components/cards/ServiceCard";
import ProductCard from "../../components/cards/ProductCard";
import FeatureComponent from "../../components/FeatureComponent/FeatureComp";
import "./Home.css";

function Home(props) {
  let homeUrl = "https://api.next.geospaceafrica.com/api/navigation/home/";
  const [products, setProducts] = useState();
  const [features, setFeatures] = useState();
  const [services, setServices] = useState();

  useEffect(() => {
    const response = async () => {
      return fetch(homeUrl)
        .then((response) => {
          if (response.ok) {
            return response;
          }
          throw Error(response.statusText);
        })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setProducts(data.products);
          setFeatures(data.features);
          setServices(data.services);
        });
    };
    response();
  }, [homeUrl]);

  console.log(products);
  console.log("features", features);
  // console.log("services",services);

  //client Object
  const srcUrl = `images/clients_img/`;
  const clientImg = [
    { name: "cde", src: srcUrl + "cde.jpeg", alt: "CDE logo" },
    { name: "cud", src: srcUrl + "cud.jpeg", alt: "CUD logo" },
    { name: "dibombori", src: srcUrl + "dibombari.jpeg", alt: "CDE logo" },
    { name: "eneo", src: srcUrl + "eneo.png", alt: "Eneo logo" },
    { name: "inc", src: srcUrl + "inc.jpeg", alt: "Inc logo" },
    { name: "maeture", src: srcUrl + "maeture.jpeg", alt: "maeture logo" },
    { name: "mindacaf", src: srcUrl + "mindcaf.png", alt: "mindcaf logo" },
    { name: "sonara", src: srcUrl + "sonara.png", alt: "Sonara logo" },
  ];

  return (
    <div>
      <div
        className="landing mb-4 "
        src=""
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) ,url(/images/home/landingresize.png)`,
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
        }}
      >
        <div className="landing-div">
          <h3>WELCOME TO</h3>
          <h1>GEOSPACE AFRICA LTD</h1>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <div className="landing-buttons">
            <ButtonMain type="main" path="/products" btnValue="Products" />
            <ButtonMain
              type="outline"
              path="/services"
              btnValue="Our Services"
            />
          </div>
        </div>
      </div>

      <div className="product_features mb-4">
        <h2>Features of Products </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        <Row className="features">
          {/* <Col md={4} xs={12}>
            <Features />
            <Features />
            <Features />
          </Col>
          <Col md={4} xs={12}>
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
          <Col md={4} xs={12}>
            <Features />
            <Features />
            <Features />
        </Col>*/}

          <Carousel controls={false}>
            <Carousel.Item>
              <FeatureComponent />
            </Carousel.Item>
            <Carousel.Item>
              <FeatureComponent />
            </Carousel.Item>
          </Carousel>
        </Row>
      </div>

      <div className="our-services mb-4">
        <h2>Our Services</h2>
        <p>
          With supporting text below as a natural lead-in to additional content.
        </p>

        <div className=" services d-flex flex-wrap">
          {services
            ? services.map((service, index) => {
                return (
                  <ServiceCard
                    key={index}
                    name={service.title}
                    desc={service.description}
                  />
                );
              })
            : null}
        </div>
      </div>

      <div className="contents">
        <div className="about_geospace">
          <h2>What You need to know About GeoSpace</h2>
          <Row className="about-row">
            <Col md={6} sm={12}>
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
            <Col md={6} sm={12}>
              <img
                src="images/about_us.jpg"
                alt=""
                width="100%"
                height="100%"
              />
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
            {products
              ? products.map((product, index) => {
                  return (
                    <ProductCard
                      key={index}
                      name={product.name}
                      description={product.short_description}
                    />
                  );
                })
              : null}
          </div>
          <ButtonMain type="main" path="/products" btnValue="View More" />
        </div>
      </div>

      <div className="partners mb-4">
        <h2>Our Partners</h2>
        <div className="partners-div d-flex">
          <img
            className="partner_img"
            src="images/partners/leica.png"
            alt=""
            width="200px"
            height="120px"
          />
          <img
            className="partner_img"
            src="images/partners/sensefly.png"
            alt=""
            width="200px"
            height="120px"
          />
          <img
            className="partner_img"
            src="images/partners/chcnav.svg"
            alt=""
            width="200px"
            height="120px"
          />
          <img
            className="partner_img"
            src="images/grey-bg.jpg"
            alt=""
            width="200px"
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
          {clientImg.map((img, index) => {
            return (
              <img
                key={index}
                className="single-partner"
                src={img.src}
                alt={img.alt}
                width="150px"
                height="100px"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
