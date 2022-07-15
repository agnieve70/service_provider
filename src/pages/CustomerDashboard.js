import React from 'react';
import CardIcon from '../components/CardIcon';
import CustomerNavbar from '../components/CustomerNavbar';
import CustomerSidebar from '../components/CustomerSidebar';
import ServiceCard from '../components/ServiceCard';

function CustomerDashboardPage() {
    return (
        <div className="mb-5">
            <CustomerNavbar />
            <CustomerSidebar />
            <div className="container">
                <h1 className="text-secondary">Dashboard</h1>
                <div className="row mt-4 mb-3">
                    <CardIcon icon="fa fa-user" status={'bg-primary'} count={20} type={'Service Provider'} />
                    <CardIcon icon="fa fa-users" status={'bg-success'} count={20} type={'Customers'} />
                    <CardIcon icon="fa fa-file" status={'bg-danger'} count={20} type={'Services'} />
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search" aria-label="Recipient's username" />
                        <button className="btn btn-outline-primary" type="button" id="button-addon2"><i className="fa fa-search"></i></button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="row row-cols-1 row-cols-md-3 g-3">
                        <ServiceCard 
                        image={'https://random.imagecdn.app/500/350'}
                        title={'Hair Rebond'}
                        price={'160.00'}
                        description={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.'}
                        category={'salon'}
                        />
                        <ServiceCard 
                        image={'https://random.imagecdn.app/500/350'}
                        title={'Aircon '}
                        price={'160.00'}
                        description={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.'}
                        category={'salon'}
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CustomerDashboardPage