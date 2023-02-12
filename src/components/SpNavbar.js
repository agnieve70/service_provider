/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect} from "react";

const auth_token = localStorage.getItem("auth_token");

async function getNotifications() {
  const response = await fetch(
    "http://srvcprvdr.agsys.online/api/transactions/notification",
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

function SpNavbar() {
  const [notification, setNotification] = useState([]);
  const [count, setCount] = useState(0);
  const [notifCount, setNotifCount] = useState(0);

  useEffect(()=> {
    getNotifications().then((result)=> {
        setNotification(result);
        setNotifCount(result.length);
    });
  }, [count]);

  setTimeout(function () {
    setCount(count + 1);
  }, 5000);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid px-5">
          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <i className="fa fa-edit"></i>
          </button>
          <div class="dropdown show me-5">
            <a
                style={{color:'#ffffff', textDecoration:'none'}}
              class="dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="badge bg-danger">{notifCount}</span><i className="fa fa-bell"></i> Notification
            </a>

            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              
              {notification.length > 0 && notification.map(e => <a class="dropdown-item"
              href={`/sp-customer-transaction-detail/${e.id}`}>
                <span><b>{e.service}</b></span> <br />
                <small>{e.created_at}</small>
              </a>)}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default SpNavbar;
