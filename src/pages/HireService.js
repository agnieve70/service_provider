import React from 'react'
import CustomerNavbar from '../components/CustomerNavbar'
import CustomerSidebar from '../components/CustomerSidebar'
import { useParams } from 'react-router-dom';

function HireService() {
  let { id } = useParams();

  console.log(id);
  
  return (
    <div>
        <div className="mb-5">
      <CustomerNavbar />
      <CustomerSidebar />
      <div className="container">
        <h1>Payment Section</h1>
      </div>
      </div>
    </div>
  )
}

export default HireService