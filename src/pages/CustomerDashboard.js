import React, {useState, useEffect} from 'react';
import CardIcon from '../components/CardIcon';
import CustomerNavbar from '../components/CustomerNavbar';
import CustomerSidebar from '../components/CustomerSidebar';
import ServiceCard from '../components/ServiceCard';

const auth_token = localStorage.getItem("auth_token");

async function totalCustomers() {

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

async function getServices() {
    const response = await fetch(
      "https://service-finder-backup.herokuapp.com/api/services",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth_token}`,
        },
      }
    );
  
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Something went wrong");
    }
  
    return data.data;
  }

function CustomerDashboardPage() {
    
    const [totalCustomer, setTotalCustomer] = useState();
    const [totalServiceProvider, setTotalServiceProvider] = useState(0);
    const [totalServices, setTotalServices] = useState(0);
    const [count, setCount] = useState(0);
    const [services, setServices] = useState([]);
    
    useEffect(()=> {
        totalCustomers().then((result)=> {
            setTotalCustomer(result.no_customer);
            setTotalServiceProvider(result.no_service_provider);
            setTotalServices(result.no_services);
        });
    }, [count]);

    useEffect(()=> {
        getServices().then((result)=> {
            setServices(result);
        });
    }, []);

    setTimeout(function () {
        setCount(count + 1);
      }, 5000);

    return (
        <div className="mb-5">
            <CustomerNavbar />
            <CustomerSidebar />
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
                    {services.length > 0 ? services.map(e => 
                        <ServiceCard
                        image={`https://service-finder-backup.herokuapp.com/file_storage/service_images/${e.image}`}
                        title={e.service}
                        price={e.price}
                        description={e.description}
                        category={e.category}
                        id={e.id}
                        />) : <p>No Service Found</p>}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CustomerDashboardPage