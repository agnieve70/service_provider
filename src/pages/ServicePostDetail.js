import React from 'react'
import { useParams } from 'react-router-dom';
import CustomerNavbar from '../components/CustomerNavbar';
import CustomerSidebar from '../components/CustomerSidebar';

function ServicePostDetail() {
  let { id } = useParams();

  return (
    <div className="mb-5">
      <CustomerNavbar />
      <CustomerSidebar />
      <div className="container">
        <h1 className="text-secondary">Title Description</h1>
        <h4>Price: Php 240.00</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laborum molestiae veniam distinctio labore dolore at. Enim odio, assumenda, asperiores molestias pariatur ducimus itaque consequuntur delectus accusamus repudiandae tempora eveniet?</p>
        {/* <button className="btn btn-primary"><b>Applied Service Provider</b></button> */}
        <h6>Service Provider that Applied</h6>
        <div className="table-responsive">
        <table className="table table-stripe">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>john@gmail.com</td>
              <td><span className="badge bg-success">Applied</span></td>
              <td>
                <button className="btn btn-warning btn-sm"><b>Hire</b></button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>john@gmail.com</td>
              <td><span className="badge bg-danger">Cancelled</span></td>
              <td>
                <button className="btn btn-warning btn-sm"><b>Hire</b></button>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
        <h6 className="mt-3">Comments</h6>
        <div className="" style={{ overflowY: 'scroll', height: 500 }}>
          <div className="card p-3 shadow mb-2">
            <p><b>John Doe</b></p>
            <span>07/16/2022</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis tenetur atque expedita est ut? Iusto repellat expedita ea veniam molestiae incidunt vero sequi facilis corrupti voluptates veritatis, nisi vel vitae?</p>
          </div>
          <div className="card p-3 shadow mb-2">
            <p><b>John Doe</b></p>
            <span>07/16/2022</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis tenetur atque expedita est ut? Iusto repellat expedita ea veniam molestiae incidunt vero sequi facilis corrupti voluptates veritatis, nisi vel vitae?</p>
          </div>
          <div className="card p-3 shadow mb-2">
            <p><b>John Doe</b></p>
            <span>07/16/2022</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis tenetur atque expedita est ut? Iusto repellat expedita ea veniam molestiae incidunt vero sequi facilis corrupti voluptates veritatis, nisi vel vitae?</p>
          </div>
          <div className="card p-3 shadow mb-2">
            <p><b>John Doe</b></p>
            <span>07/16/2022</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis tenetur atque expedita est ut? Iusto repellat expedita ea veniam molestiae incidunt vero sequi facilis corrupti voluptates veritatis, nisi vel vitae?</p>
          </div>
        </div>
        <form action="" className="mt-3">
          <div className="form-group">
            <textarea name="" id="" className="form-control" cols="30" rows="5"></textarea>
            <button className="btn btn-primary mt-2">Save Comment</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ServicePostDetail