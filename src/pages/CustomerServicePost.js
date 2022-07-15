import React from 'react'
import CustomerNavbar from '../components/CustomerNavbar'
import CustomerSidebar from '../components/CustomerSidebar'

function CustomerServicePost() {
  return (
    <div>
      <CustomerNavbar />
      <CustomerSidebar />
      <div className="container">
        <h1 className="text-secondary">Customer Service Request</h1>
        <div className="row">
          <div className="col-md-12">
            <a href="service-post-detail/1" style={{textDecoration:'none'}}>
            <div className="card p-3 shadow">
              <h2 className="text-secondary">Need Katabang</h2>
              <p className="text-dark">Price: Php. 240 per day</p>
              <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet atque cumque, dolore quia, blanditiis facere autem rerum, quisquam soluta ratione sed aliquam accusamus impedit animi nostrum beatae quam recusandae eaque.</p>
              <p className="text-dark">7/16/2022</p>
            </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerServicePost