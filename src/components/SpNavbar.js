/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function SpNavbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        <i className="fa fa-edit"></i>
                    </button>
                    <a className="navbar-brand" href="#">Service Finder</a>
                </div>
            </nav>
        </div>
    )
}

export default SpNavbar