/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import MyServiceCard from "../components/MyServiceCard";
import SpNavbar from "../components/SpNavbar";
import SpSidebar from "../components/SpSidebar";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


const auth_token = localStorage.getItem("auth_token");

async function deleteCategories(id) {
  const response = await fetch(
    `http://srvcprvdr.agsys.online/services/delete/${id}`,
    {
      method:'DELETE',
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

async function getCategories() {
  const response = await fetch(
    "http://srvcprvdr.agsys.online/api/service_categories",
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

async function getMyServices() {
  const response = await fetch(
    "http://srvcprvdr.agsys.online/api/my-services",
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

async function addService(category, store, service, price, description, image) {
  let bodyFormData = new FormData();
  bodyFormData.append("category_id", category);
  bodyFormData.append("store", store);
  bodyFormData.append("service", service);
  bodyFormData.append("price", price);
  bodyFormData.append("description", description);
  bodyFormData.append("image", image);
  bodyFormData.append("status", "approved");
  bodyFormData.append("ratings", "0");

  const res = await fetch(
    "http://srvcprvdr.agsys.online/api/services/create",
    {
      method: "POST",
      body: bodyFormData,
      headers: {
        Authorization: `Bearer ${auth_token}`,
        Accept: `application/json`,
      },
    }
  );

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "Something wnt wrong");
  }

  return data;
}

async function updateService(
  id,
  category,
  store,
  service,
  price,
  description,
  image
) {
  let bodyFormData = new FormData();
  bodyFormData.append("id", id);
  bodyFormData.append("category_id", category);
  bodyFormData.append("store", store);
  bodyFormData.append("service", service);
  bodyFormData.append("price", price);
  bodyFormData.append("description", description);
  bodyFormData.append("image", image);

  const res = await fetch(
    "http://srvcprvdr.agsys.online/api/services/update",
    {
      method: "POST",
      body: bodyFormData,
      headers: {
        Authorization: `Bearer ${auth_token}`,
        Accept: `application/json`,
      },
    }
  );

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "Something wnt wrong");
  }

  return data;
}

function MyServices() {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState();
  const [store, setStore] = useState();
  const [service, setService] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();
  const [count, setCount] = useState(0);
  const [services, setServices] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [id, setId] = useState("");

  useEffect(() => {
    getCategories().then((result) => {
      setCategories(result);
    });
  }, []);

  useEffect(() => {
    getMyServices().then((result) => {
      setServices(result);
    });
  }, [count]);

  setTimeout(function () {
    setCount(count + 1);
  }, 5000);

  function submitHandler(e) {
    e.preventDefault();
    if (id) {

      setLoading(true);
      updateService(id, category, store, service, price, description, image).then((result) => {
        if (result) {
          setCount(count + 1);
          clearFields();
          setLoading(false);
          window.location.href='/my-services';
        }
      }).catch((result) => {
        setCount(count + 1);
        setLoading(false);
        setError(result.message);
      });

    } else {
      setLoading(true);
      addService(category, store, service, price, description, image)
        .then((result) => {
          if (result) {
            setCount(count + 1);
            clearFields();
            setLoading(false);
          window.location.href='/my-services';
        }
        })
        .catch((result) => {
          setLoading(false);
          setError(result.message);
        });
    }
  }

  function clearFields() {
    setId("");
    setCategory("");
    setService("");
    setDescription("");
    setPrice("");
    setStore("");
    setImage(null);
  }

  function editHandler(e) {
    console.log(e);
    setId(e.id);
    setCategory(e.category_id);
    setService(e.service);
    setDescription(e.description);
    setPrice(e.price);
    setStore(e.store);
    setImage(null);
  }

  function deleteHandler(id){
    const MySwal = withReactContent(Swal);

    MySwal.fire({
      icon:'info',
      title: 'Do you want to delete Service?',
      showCancelButton: true,
      confirmButtonText: 'Delete',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        deleteCategories(id).then((result)=> {
          setCount(count + 1);
          Swal.fire('Deleted!', '', 'success').then(()=> {
            window.location.href='/my-services';
          })
        }).catch((error)=> {
          Swal.fire('Something went wrong!', '', 'danger');
        });
      }
    })
  }

  return (
    <div className="mb-5">
      <SpNavbar />
      <SpSidebar />
      <div className="container">
        <h1 className="text-secondary">My Services</h1>
        {error && (
          <div class="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <form action="" className="mb-3" onSubmit={submitHandler}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="category">Category</label>
                <select
                  id="category"
                  className="form-control"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option disabled selected>
                    Select Category
                  </option>
                  {categories.length > 0 &&
                    categories.map((e) => (
                      <option value={e.category}>{e.category}</option>
                    ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="service">Service Name</label>
                <input
                  className="form-control"
                  id="service"
                  type="text"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="store">Store</label>
                <input
                  className="form-control"
                  type="text"
                  id="store"
                  value={store}
                  onChange={(e) => setStore(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="image">Image</label>
                <input
                  className="form-control"
                  type="file"
                  id="image"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="price">Price</label>
                <input
                  value={price}
                  id="price"
                  onChange={(e) => setPrice(e.target.value)}
                  className="form-control"
                  type="number"
                  min="0.00"
                  max="10000.00"
                  step="0.01"
                />
              </div>
              <div className="form-group mb-2">
                <label htmlFor="price">Description</label>
                <textarea
                  className="form-control"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary me-2">
                Save Service
              </button>
              <button
                type="button"
                onClick={clearFields}
                className="btn btn-secondary me-2"
              >
                Clear Fields
              </button>
              {loading && (
                <div class="spinner-border" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              )}
            </div>
          </div>
        </form>
        <div className="row">
          <div className="row row-cols-1 row-cols-md-3 g-3">
            {services.length > 0 &&
              services.map((e) => (
                <MyServiceCard
                  image={`http://srvcprvdr.agsys.online/file_storage/service_images/${e.image}`}
                  title={e.service}
                  price={e.price}
                  description={e.description}
                  action={
                    <>
                    <a href={`/sp-service-detail/${e.id}`}
                        className="btn btn-primary btn-sm me-1"
                      >
                        <i className="fa fa-eye"></i>
                      </a>
                      <button
                        onClick={editHandler.bind(this, e)}
                        className="btn btn-warning btn-sm me-1"
                      >
                        <i className="fa fa-edit"></i>
                      </button>
                      <button onClick={deleteHandler.bind(this, e.id)} className="btn btn-danger btn-sm">
                        <i className="fa fa-trash"></i>
                      </button>
                    </>
                  }
                  category={e.category_id}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyServices;
