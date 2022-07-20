import React from 'react'
import { Link } from "react-router-dom";

function ServiceCard(props) {
    return (
        <div className="col mb-2">
            <Link to={`/service-detail/${props.id}`} className='' style={{textDecoration:'none'}}>
            <div className="card h-100">
                <img src={props.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">
                        <span><b>Php. {props.price}</b></span> <br />
                        <span className='badge bg-primary'>{props.category}</span> <br />
                        <span>{props.description}</span> <br />
                    </p>
                </div>
            </div>
            </Link>
        </div>
    )
}

export default ServiceCard