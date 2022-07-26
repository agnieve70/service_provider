import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import SpNavbar from "../components/SpNavbar";
import SpSidebar from "../components/SpSidebar";
import MapboxContent from "../components/MapContent";

const auth_token = localStorage.getItem("auth_token");

async function getSearchService(id) {
  const response = await fetch(
    `https://service-finder-backup.herokuapp.com/api/transaction/detail/${id}`,
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

function SpCustomerTransactionDetail() {
  let { id } = useParams();

  const [detail,  setDetail] = useState([]);

  useEffect(()=> {
    getSearchService(id).then((result) => {
      console.log(result);
      setDetail(result);
    });
  },[]);

  function submitHandler(e){
    e.preventDefault();
    
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
        <MapboxContent
            setMyLat={detail ? parseFloat(detail?.latitude): 	6.757509}
            setMyLng={detail ? parseFloat(detail?.longtitude) : 	125.352398 }
            latitude={detail ? parseFloat(detail?.latitude) : 6.757509}
            longitude={detail ? parseFloat(detail?.longtitude) : 	125.352398}
          />
        <form action="" onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="output">Upload File</label>
            <input type="file" id="output" className="form-control" />
            <button type="submit" className="mt-2 btn btn-primary">Service Done</button>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
}

export default SpCustomerTransactionDetail;
