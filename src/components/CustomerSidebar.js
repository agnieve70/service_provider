/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const user_detail = JSON.parse(localStorage.getItem("user_detail"));

function CustomerSidebar() {

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
                        <a href="/customer-dashboard" className="btn btn-primary py-3"><i className="fa fa-dashboard"></i> Dashboard</a>
                        <a href="/my-service-request" className="btn btn-primary py-3"><i className="fa fa-clipboard"></i> My Service Requests</a>
                        <a href="/service-provider-services" className="btn btn-primary py-3"><i className="fa fa-users"></i> Services</a>
                        {/* <a href="/customer-services-post" className="btn btn-primary py-3"><i className="fa fa-search"></i> Post Services</a> */}
                        <a href="/customer-transactions" className="btn btn-primary py-3"><i className="fa fa-file"></i> Transactions</a>
                        <button href="#" onClick={logoutHandler} className="btn btn-primary py-3"><i className="fa fa-sign-out"></i> Logout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerSidebar