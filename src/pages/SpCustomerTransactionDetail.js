import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import SpNavbar from "../components/SpNavbar";
import SpSidebar from "../components/SpSidebar";
import MapboxContent from "../components/MapContent";

const auth_token = localStorage.getItem("auth_token");

async function getSearchService(id) {
  const response = await fetch(
    `http://srvcprvdr.agsys.online/api/transaction/detail/${id}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth_token}`,
      },
    }
  );

  const data = await response.json();
  if (!response.ok) 
  {
    throw new Error(data.message || "Something went wrong");
  }

  return data.data;
}

async function updateService(id, image) {
  let bodyFormData = new FormData();
  bodyFormData.append("id", id);
  bodyFormData.append("image", image);

  const res = await fetch(
    "http://srvcprvdr.agsys.online/api/transaction/update",
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

function SpCustomerTransactionDetail() {
  const [image, setImage] = useState();

  let { id } = useParams();

  const [detail,  setDetail] = useState({});

  useEffect(()=> {
    getSearchService(id).then((result) => {
      console.log(result);
      setDetail(result);
    });
  },[]);

  function submitHandler(e){
    e.preventDefault();
    updateService(id, image).then((result) => {
      if(result){
        window.location.href='/sp-customer-transaction';
      }
    });
  }

  return (
    <div className="mb-5">
      <SpNavbar />
      <SpSidebar />
      <div className="container">
        <h1>Detail</h1>
        <div className="card p-3">
          <h4>Service: {detail?.service}</h4>
          <h4>Price: {detail?.price}</h4>
        {
          Object.keys(detail).length !== 0 && <MapboxContent
          setMyLat={parseFloat(detail?.latitude)}
          setMyLng={parseFloat(detail?.longtitude)}
          latitude={parseFloat(detail?.latitude)}
          longitude={parseFloat(detail?.longtitude)}
        />
        }
        <form action="" onSubmit={submitHandler}>
          <div className="form-group">
                <label htmlFor="image">Image</label>
                <input
                  className="form-control"
                  type="file"
                  id="image"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
              <button onClick={submitHandler} className="mt-2 btn btn-primary">Service Done</button>
        </form>
        </div>
      </div>
    </div>
  );
}

export default SpCustomerTransactionDetail;
