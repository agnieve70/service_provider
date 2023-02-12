import React, {useEffect, useState} from 'react'
import CustomerNavbar from '../components/CustomerNavbar'
import CustomerSidebar from '../components/CustomerSidebar'

const auth_token = localStorage.getItem("auth_token");

async function getTransactions() {
    const response = await fetch(
      "http://srvcprvdr.agsys.online/api/transaction/customer",
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

function CustomerTransactions() {
    const [transactions, setTransactions] = useState([]);

    useEffect(()=> {
        getTransactions().then((result) => {
            setTransactions(result);
        });
    }, []);

  return (
    <div className="mb-5">
    <CustomerNavbar />
    <CustomerSidebar />
    <div className="container">
        <h1 className="text-secondary">Transactions</h1>
    </div>
    </div>
  )
}

export default CustomerTransactions