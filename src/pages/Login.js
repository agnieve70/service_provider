/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function LoginPage() {
    return (
        <div className='container-fluid'>
            <div className="row justify-content-center">
                <div className="col-md-4 mt-5">
                    <form action="">
                        <h2 className='text-center'>Login to User Account</h2>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" className="form-control" />
                        </div>
                        <div className="d-grid gap-2 mt-2">
                            <a href='/customer-dashboard' className="btn btn-primary" type="button">Login as Customer</a>
                            <a href='/service-provider-dashboard' className="btn btn-danger" type="button">Login as Service Provider</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage