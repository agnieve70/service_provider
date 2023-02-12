/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from "react";
import CustomerNavbar from "../components/CustomerNavbar";
import CustomerSidebar from "../components/CustomerSidebar";
import MapboxContent from "../components/MapContent";
import { useParams } from "react-router-dom";

const auth_token = localStorage.getItem("auth_token");

async function createInvoice(service_id, latitude, longitude) {
  const response = await fetch(
    `http://srvcprvdr.agsys.online/api/invoice/create`,
    {
      method: "POST",
      body: JSON.stringify({ service_id, latitude, longitude }),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${auth_token}`,
      },
    }
  );

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data.data;
}

function HireService() {
  let { id } = useParams();
  const [myLat, setMyLat] = useState();
  const [myLng, setMyLng] = useState();
  const [showInvoice, setShowInvoice] = useState(false);
  const [invoice, setInvoice] = useState("");

  useEffect(() => {}, []);

  function saveLocationHandler() {
    createInvoice(id, myLat, myLng).then((result) => {
      console.log(result);
      if (result) {
        setInvoice(result.invoice_url);
        setShowInvoice(true);
        console.log(result);
      }
    });
  }

  return (
    <div>
      <div className="mb-5">
        <CustomerNavbar />
        <CustomerSidebar />
        <div className="container">
          {!showInvoice && <>
            <h1>Payment Section</h1>
          <p>
            Please Select a location. This will be sent to Service Provider when
            the payment succeeded.
          </p>
          <MapboxContent
            setMyLat={setMyLat}
            setMyLng={setMyLng}
            latitude={6.74972}
            longitude={125.35722}
          />
          <div className="mb-3">
            <p>Latitude: {myLat}</p>
          </div>
          <div className="mb-3">
            <p>Longitude: {myLng}</p>
          </div>
          <button
            onClick={saveLocationHandler}
            disabled={!myLat && !myLng ? true : false}
            className="btn btn-primary"
          >
            Save Location
          </button>
          </>}
          {
            showInvoice && <div className="row">
            <iframe style={{height: '70vh'}} className="col-lg-12 col-md-12 col-sm-12" src={invoice} title="W3Schools Free Online Web Tutorials"></iframe>
          </div>
          }
          
        </div>
      </div>
    </div>
  );
}

export default HireService;
