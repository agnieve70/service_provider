import React from 'react'
import SpNavbar from '../components/SpNavbar'
import SpSidebar from '../components/SpSidebar'

function SpCustomerServicePost() {
  return (
    <div>
      <SpNavbar />
      <SpSidebar />
      <div className="container">
        <h1 className="text-secondary">Customer Service Request</h1>
        <div className="row">
          <div className="col-md-12">
            <div className="card p-3 shadow">
              <h2 className="text-secondary">Need Katabang</h2>
              <p className="text-dark">Price: Php. 240 per day</p>
              <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet atque cumque, dolore quia, blanditiis facere autem rerum, quisquam soluta ratione sed aliquam accusamus impedit animi nostrum beatae quam recusandae eaque.</p>
              <p className="text-dark">7/16/2022</p>
              <div>
              <button className="btn btn-warning"><b>APPLY</b></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpCustomerServicePost