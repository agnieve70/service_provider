import React from 'react'
import CustomerNavbar from '../components/CustomerNavbar'
import CustomerSidebar from '../components/CustomerSidebar'

function MyServiceRequest() {
  return (
    <div className="mb-5">
    <CustomerNavbar />
    <CustomerSidebar />
    <div className="container">
      <h1>My Services</h1>
      <div className="row">
        <div className="col-md-4">
          <form action="">
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input type="text" name="" id="title" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="content">Content</label>
              <textarea rows={3} id="content" className="form-control"></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="category_id">Category</label>
              <select name="" id="category_id" className="form-control">
                <option value="">Salon</option>
                <option value="">Electrical</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input type="number" name="" id="price" className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary me-2 mt-2">Save Post</button>
            <button type="button" className="btn btn-secondary mt-2">Clear</button>
          </form>
        </div>
        <div className="col-md-8">
        <div className="table-responsive">
          <table className="table table-stripe">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Price</th>
                <th>Category</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Sample Title</td>
                <td>240.00</td>
                <td>Salon</td>
                <td><span className="badge bg-success">active</span></td>
                <td>
                  <button className="btn btn-warning btn-sm me-2"><b>Disable</b></button>
                  <button className="btn btn-primary btn-sm"><b>Details</b></button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Sample Title2</td>
                <td>350.00</td>
                <td>Salon</td>
                <td><span className="badge bg-danger">inactive</span></td>
                <td>
                  <button className="btn btn-success btn-sm me-2"><b>Enable</b></button>
                  <button className="btn btn-primary btn-sm"><b>Details</b></button>
                </td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default MyServiceRequest