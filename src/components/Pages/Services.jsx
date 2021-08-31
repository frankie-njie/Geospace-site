import React from 'react';
import './Services.css'
import ServiceCard from '../Cards/ServiceCard';
import Banner from '../Banner';


function Services (){
    return (
        <div>
            <Banner head="Services" />
            <div className="service-all d-flex flex-wrap">
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
        </div>
        </div>
        
        
    )
}

export default Services;