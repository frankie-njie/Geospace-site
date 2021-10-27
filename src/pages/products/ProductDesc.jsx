import React, { useEffect, useState } from "react";
import { Col, Row, Tabs, Tab, Carousel } from "react-bootstrap";
import ButtonMain from "../../components/Buttons/ButtonMain";
import ProductCard from "../../components/cards/ProductCard";
import "./ProductDesc.css";

function ProductDesc(props) {
  useEffect(() => {
    const productId = props.match.params.id;
    console.log(productId);
    // fetch data for productId
  }, []);

  return (
    <div className="product-content">
      <Row className="product-div mt-5 mb-5">
        <Col>
          <img
            src="images/grey-bg.jpg"
            alt="product-desc"
            width="550px"
            height="380px"
          />
          <div className="mt-4 d-flex">
            <img
              className="small-img"
              src="images/grey-bg.jpg"
              alt=""
              width="100px"
              height="100px"
            />
            <img
              className="small-img"
              src="images/grey-bg.jpg"
              alt=""
              width="100px"
              height="100px"
            />
            <img
              className="small-img"
              src="images/grey-bg.jpg"
              alt=""
              width="100px"
              height="100px"
            />
            <img
              className="small-img"
              src="images/grey-bg.jpg"
              alt=""
              width="100px"
              height="100px"
            />
          </div>
        </Col>
        <Col className="product-desc">
          <div>
            <h6>Product Category</h6>
            <h3>Detailed Product Name</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              magni ut animi nam consectetur maxime, sequi consequatur ea vitae,
              obcaecati necessitatibus ab eos libero corrupti minima, quidem
              repudiandae excepturi facere.
            </p>
          </div>
          <div className="mt-5">
            <h5>Make an Inquiry</h5>
            <ButtonMain type="outline" btnValue="Call Now" />
            <ButtonMain btnValue="Send Email" />
          </div>
        </Col>
      </Row>
      <div className="more-description">
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Home">
            <h5>Home Description</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              aliquam hic nostrum! Sit, itaque cupiditate delectus laudantium
              quidem veritatis sunt eveniet suscipit consequatur neque
              repudiandae rem praesentium porro quisquam corporis.
            </p>
          </Tab>
          <Tab eventKey="profile" title="Profile">
            <h5>Profile Description</h5>
            <p>
              Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce
              vieux whisky au juge blond qui fume sur son île intérieure, à côté
              de l"alcôve ovoïde, où les bûches se consument dans l"âtre, ce qui
              lui permet de penser à la cænogenèse de l"être dont il est
              question dans la cause ambiguë entendue à Moÿ, dans un capharnaüm
              qui, pense-t-il, diminue çà et là la qualité de son œuvre.
              Prouvez, beau juge, que le fameux sandwich au yak tue. L"île
              exiguë, Où l"obèse jury mûr Fête l"haï volapük, Âne ex æquo au
              whist, Ôtez ce vœu déçu. Vieux pelage que je modifie :
              breitschwanz ou yak ? Dès Noël où un zéphyr haï me vêt de glaçons
              würmiens, je dîne d’exquis rôtis de bœuf au kir{" "}
            </p>
          </Tab>
          <Tab eventKey="contact" title="Contact">
            <h5>Contact Description</h5>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi{" "}
            </p>
          </Tab>
        </Tabs>
      </div>
      <div className="relatedprod-div">
        <h2 className="">Related Products</h2>
        <Carousel>
          <Carousel.Item>
            <div className="d-flex justify-content-around">
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-around">
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-around">
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default ProductDesc;
