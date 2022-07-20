import React, {useState, useEffect} from 'react'
import CardIcon from '../components/CardIcon';
import ServiceCard from '../components/ServiceCard';
import SpNavbar from '../components/SpNavbar';
import SpSidebar from '../components/SpSidebar';

async function totalCustomers() {

    const auth_token = localStorage.getItem("auth_token");

    const response = await fetch("https://service-finder-backup.herokuapp.com/api/total-number", {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${auth_token}`
        },
    });

    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
    }

    return data;
}

function SpDashboard() {

    const [totalCustomer, setTotalCustomer] = useState();
    const [totalServiceProvider, setTotalServiceProvider] = useState(0);
    const [totalServices, setTotalServices] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(()=> {
        totalCustomers().then((result)=> {
            setTotalCustomer(result.no_customer);
            setTotalServiceProvider(result.no_service_provider);
            setTotalServices(result.no_services);
        });
    }, [count]);

    setTimeout(function () {
        setCount(count + 1);
      }, 5000);

  return (
    <div className="mb-5">
            <SpNavbar />
            <SpSidebar />
            <div className="container">
                <h1 className="text-secondary">Dashboard</h1>
                <div className="row mt-4 mb-3">
                    <CardIcon icon="fa fa-user" status={'bg-primary'} count={totalServiceProvider} type={'Service Provider'} />
                    <CardIcon icon="fa fa-users" status={'bg-success'} count={totalCustomer} type={'Customers'} />
                    <CardIcon icon="fa fa-file" status={'bg-danger'} count={totalServices} type={'Services'} />
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

export default SpDashboard