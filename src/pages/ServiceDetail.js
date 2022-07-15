/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import CustomerNavbar from '../components/CustomerNavbar'
import CustomerSidebar from '../components/CustomerSidebar'
import { useParams } from 'react-router-dom';

function ServiceDetail() {
  let { id } = useParams();

  return (
    <div className="mb-5">
      <CustomerNavbar />
      <CustomerSidebar />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-secondary">Service Title</h1>
            <img src="https://random.imagecdn.app/500/350" width={'100%'} />
            <div className="row">
              <div className="col-md-6">
                <h4>Price: Php. 140.00</h4>
              </div>
              <div className="col-md-6">
                <a href="/hire-service/1" className="btn btn-warning float-end mt-2 text-bold"><b>HIRE SERVICE</b></a>
              </div>
            </div>
            <h6><span className="badge bg-primary">Sample</span></h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio molestias optio ab minus cum deleniti expedita suscipit necessitatibus beatae dolore tempore, architecto sunt rerum nemo sapiente voluptatibus quis dolorum ipsum.</p>
          </div>
          <div className="col-md-6 mt-5">
            <h4 className="text-secondary">Comments</h4>

            <div style={{ overflowY: 'scroll', height: 400 }}>
              <div className="card p-3 shadow mb-2">
                <span className="text-primary"><b>John Doe</b></span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic est totam, omnis officiis inventore repellat animi sint eius incidunt optio maiores</p>
                <span>07/15/2022</span>
              </div>
            </div>

            <form action="">
              <div className="form-group mb-2">
                <textarea className="form-control" name="" id="comment" placeholder="Comment..." cols="30" rows="5"></textarea>
              </div>
              <button className="btn btn-primary">Save Comment</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceDetail