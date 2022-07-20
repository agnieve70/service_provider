import React from 'react'

function MyServiceCard(props) {
    return (
        <div className="col mb-2">
            <div className="card h-100">
                <img src={props.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title} 
                    <div className="float-end">
                    {props.action}
                    </div>
                    </h5>
                    <p className="card-text">
                        <span><b>Php. {props.price}</b></span> <br />
                        <span className='badge bg-primary'>{props.category}</span> <br />
                        <span>{props.description}</span> <br />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MyServiceCard