/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
    
const user_detail = JSON.parse(localStorage.getItem("user_detail"));
function SpSidebar() {

    function logoutHandler()
    {
        localStorage.removeItem("auth_token");
        localStorage.removeItem("role");
        window.location.href = "/";
    }

    return (
        <div>
            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Service Finder</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <h2>{user_detail.name}</h2>
                    <span className='mb-3 text-muted'>{user_detail.email}</span> <br />
                    <span className='badge bg-primary mb-3'>{user_detail.role}</span>

                    <div className="d-grid gap-2 mt-2">
                        <a href="/sp-dashboard" className="btn btn-primary py-3"><i className="fa fa-dashboard"></i> Dashboard</a>
                        <a href="/my-services" className="btn btn-primary py-3"><i className="fa fa-clipboard"></i> My Services</a>
                        <a href="/sp-customer-transaction" className="btn btn-primary py-3"><i className="fa fa-users"></i> Customer Transaction</a>
                        <a href="/sp-customer-services-post" className="btn btn-primary py-3"><i className="fa fa-search"></i> Customer Posts</a>
                        <button href="#" onClick={logoutHandler} className="btn btn-primary py-3"><i className="fa fa-sign-out"></i> Logout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpSidebar