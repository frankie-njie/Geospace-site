import React from 'react';
import {Button, Col, ListGroup, Row} from 'react-bootstrap';
import './Products.css'
import Banner from '../Banner';
import ProductCard from '../Cards/ProductCard';

function Products (){
    return (
        <div>
        <Banner head="Products" />
        <Row className="products-page">
            <Col md={2}>
                <h3>Categories</h3>
                <hr />
                <div>
                    <ListGroup variant="flush">
                        <ListGroup.Item>All Products</ListGroup.Item>
                        <ListGroup.Item>Hand Held</ListGroup.Item>
                        <ListGroup.Item>Total Stations</ListGroup.Item>
                        <ListGroup.Item>3D lasers</ListGroup.Item>
                        <ListGroup.Item>Level</ListGroup.Item>
                        <ListGroup.Item>Drones</ListGroup.Item>
                    </ListGroup>
                </div>
            </Col>
            <Col md={10} >
                <div className="buttons">
                    <Button variant="light">Show all</Button>
                    <Button variant="light">Cars</Button>
                    <Button variant="light">Animals</Button>
                    <Button variant="light">Fruits</Button>
                    <Button variant="light">Colors</Button>
                </div>
                <hr />
                <div className="mt-4 d-flex flex wrap">
                    <ProductCard />

                </div>
            </Col>
        </Row>
        </div>
    )
}

export default Products;