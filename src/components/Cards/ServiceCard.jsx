import React from 'react';
import { Card } from 'react-bootstrap';
import './ServiceCard.css'


function ServiceCard(props) {
    return (
        <Card className="service-card" style={{ width: '20rem' }}>
            <Card.Img variant="top" src="images/grey-bg.jpg" />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                {props.desc}
                </Card.Text>
                <Card.Link href="#">Learn More</Card.Link>
            </Card.Body>
        </Card>
    )
}
export default ServiceCard;