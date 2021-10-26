import React from 'react';
import {Col, Card, Row} from 'react-bootstrap';
import './FeatureCard.css'


function Features (props) {

    return (
        <Card className="feature" >          
            <Card.Body>
                <Row className="features-div">
                    <Col md={3} xs={3}>
                        <Card.Img alt="feature icon" className="feature-icon" src={props.icon} width="100%" height="100%" />
                    </Col>
                    <Col md={9} xs={9} >
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text className="feature-text">
                            {(props.desc)}
                        </Card.Text>
                    </Col>
                </Row>
            </Card.Body>          
        </Card>
    )
}

export default Features