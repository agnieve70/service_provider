import React from 'react';

function CardIcon(props) {
    return (
        <div className="col-md-4 mb-2">
            <div className={`card ${props.status}`}>
                <div className="card-body">
                <div className="row justify-content-center">
                    <div className="col-md-3">
                        <h1 className='text-white'><i className={props.icon}></i></h1>
                    </div>
                    <div className="col-md-4">
                        <h1 className="text-white">{props.count}</h1>
                    </div>
                </div>
                </div>
                <div className="card-footer">
                    <p className='text-white text-center text-bold'>{props.type}</p>
                </div>
            </div>
        </div>
    )
}

export default CardIcon