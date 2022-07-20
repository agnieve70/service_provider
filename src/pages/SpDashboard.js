import React, {useState, useEffect} from 'react'
import CardIcon from '../components/CardIcon';
import MyServiceCard from '../components/MyServiceCard';
import SpNavbar from '../components/SpNavbar';
import SpSidebar from '../components/SpSidebar';

const auth_token = localStorage.getItem("auth_token");

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

function SpDashboard() {

    const [totalCustomer, setTotalCustomer] = useState();
    const [totalServiceProvider, setTotalServiceProvider] = useState(0);
    const [totalServices, setTotalServices] = useState(0);
    const [services, setServices] = useState([]);
    const [count, setCount] = useState(0);
    const [search, setSearch] = useState("");

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

      function searchHandler(){
        
      }

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
                        <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" className="form-control" placeholder="Search" aria-label="Recipient's username" />
                        <button onClick={searchHandler} className="btn btn-outline-primary" type="button" id="button-addon2"><i className="fa fa-search"></i></button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="row row-cols-1 row-cols-md-3 g-3">
                        {services.length > 0 ? services.map(e => 
                        <MyServiceCard
                        image={`https://service-finder-backup.herokuapp.com/file_storage/service_images/${e.image}`}
                        title={e.service}
                        price={e.price}
                        description={e.description}
                        category={e.category}
                        />) : <p>No Service Found</p>}
                        
                    </div>
                </div>
            </div>
        </div>
  )
}

export default SpDashboard