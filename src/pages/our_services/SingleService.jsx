import React from 'react'
import Banner from '../../components/banner/Banner'

import './SingleService.css'

function SingleService (){
    return (
        <div>
            <Banner head="Single Service" />
            <div className="service-content">
                <div>
                    <h3  className="service-h2">Service Title</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quia vel repellendus nobis harum perferendis mollitia quis! Earum, sequi repudiandae saepe corrupti pariatur praesentium modi maxime esse beatae ducimus sint?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quia vel repellendus nobis harum perferendis mollitia quis! Earum, sequi repudiandae saepe corrupti pariatur praesentium modi maxime esse beatae ducimus sint?
                    </p>
                </div>  

                <div>
                    <h3 className="service-h2">Service Description</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quia vel repellendus nobis harum perferendis mollitia quis! Earum, sequi repudiandae saepe corrupti pariatur praesentium modi maxime esse beatae ducimus sint?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quia vel repellendus nobis harum perferendis mollitia quis! Earum, sequi repudiandae saepe corrupti pariatur praesentium modi maxime esse beatae ducimus sint?
                    </p>
                </div>

                <div>
                    <h3 className="service-h2">Advantage of These Services</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quia vel repellendus nobis harum perferendis mollitia quis! Earum, sequi repudiandae saepe corrupti pariatur praesentium modi maxime esse beatae ducimus sint?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quia vel repellendus nobis harum perferendis mollitia quis! Earum, sequi repudiandae saepe corrupti pariatur praesentium modi maxime esse beatae ducimus sint?
                    </p>
                </div>

                <div>
                    <h3 className="service-h2">Tools for Service</h3>
                    <ul>
                        <li>Product Name</li>
                        <li>Product Name</li>
                        <li>Product Name</li>
                        <li>Product Name</li>
                    </ul>
                    
                </div>

                {/* <div>
                    <h3 className="service-h2">Related Products</h3>                
                </div> */}
            </div>           
        </div>
    )
}

export default SingleService ;