import React, {useState, useEffect} from "react";
import SpNavbar from "../components/SpNavbar";
import SpSidebar from "../components/SpSidebar";

const auth_token = localStorage.getItem("auth_token");

async function getSearchServices() {
  const response = await fetch(
    "https://srvcprvdr.agsys.online/api/transactions/by-service-provider",
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

function SpCustomerTransaction() {

  const [transactions, setTransactions] = useState();

  useEffect(()=> {
    getSearchServices().then((result) => {
      setTransactions(result);
    });
  }, []);

  function detailHandler(id){
    window.location.href=`/sp-customer-transaction-detail/${id}`;
  }

  return (
    <div>
      <SpNavbar />
      <SpSidebar />
      <div className="container">
        <h1 className="text-secondary">Transactions</h1>
        <div className="table-responsiveness">
          <table className="table table-stripe">
            <thead>
              <tr>
                <th>#</th>
                <th>Latitude</th>
                <th>Longitude</th>
                <th>Service</th>
                <th>Price</th>
                <th>Status</th>
                <th>Created</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
                {transactions && transactions.map((e)=> <tr>
                  <td>{e.id}</td>
                  <td>{e.latitude}</td>
                  <td>{e.longtitude}</td>
                  <td>{e.service}</td>
                  <td>{e.price}</td>
                  <td>{e.status}</td>
                  <td>{e.created_at}</td>
                  <td>  
                    {e.status === 'Success' ? <button onClick={detailHandler.bind(this, e.id)} className="btn btn-primary btn-sm"><i className="fa fa-eye"></i></button> 
                    : e.status === 'Done' ? <span className="badge bg-success">Transaction Done</span> : <span className="badge bg-warning">Payment Pending</span>}
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SpCustomerTransaction;
