import React from 'react';
import {Col, Card, Row} from 'react-bootstrap';
import './FeatureCard.css'


function Features (props) {
    return (
        <Card className="feature" >          
            <Card.Body>
                <Row>
                    <Col md={3} xs={4}>
                        <Card.Img alt="feature icon" className="feature-icon" src="/images/grey-bg.jpg" width="100%" height="100%" />
                    </Col>
                    <Col md={9} xs={8} >
                        <Card.Title><h5>Special title treatment</h5></Card.Title>
                        <Card.Text className="feature-text">
                        With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                    </Col>
                </Row>
            </Card.Body>          
        </Card>
    )
}

export default Features