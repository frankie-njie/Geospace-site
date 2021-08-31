import React from 'react';
import { Card } from 'react-bootstrap';
import './ServiceCard.css'


function ServiceCard(props) {
    return (
        <Card className="service-card" style={{ width: '20rem' }}>
            <Card.Img variant="top" src="images/grey-bg.jpg" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
            </Card.Body>
            <Card.Body>
                <Card.Link href="#">Learn More</Card.Link>
            </Card.Body>
        </Card>
    )
}
export default ServiceCard;