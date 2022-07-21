/* eslint-disable jsx-a11y/alt-text */
import React, {useEffect, useState} from 'react'
import CustomerNavbar from '../components/CustomerNavbar'
import CustomerSidebar from '../components/CustomerSidebar'
import { useParams } from 'react-router-dom';

const auth_token = localStorage.getItem("auth_token");

async function createComment(service_id, comment) {
  const response = await fetch(
    "https://service-finder-backup.herokuapp.com/api/comment/create",
    {
      method: "POST",
      body: JSON.stringify({ service_id, comment }),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${auth_token}`
      },
    }
  );

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
}

async function getService(id) {
  const response = await fetch(
    `https://service-finder-backup.herokuapp.com/api/service/${id}`,
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

async function getComments(id) {
  const response = await fetch(
    `https://service-finder-backup.herokuapp.com/api/comments/${id}`,
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

function ServiceDetail() {
  let { id } = useParams();
  const [service_detail, setServiceDetail] = useState();
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [count, setCount] = useState(0);
  useEffect(()=> {
    getService(id).then((result)=> {
      console.log("RESULT", result);
      setServiceDetail(result);
    });

    getComments(id).then((result)=> {
      setComments(result);
    })
  },[count]);

  setTimeout(function () {
    setCount(count + 1);
  }, 5000);

  function submitHandler(e){
    e.preventDefault();
    createComment(id, comment).then((result)=> {
      if(result){
        setCount(count + 1);
        setComment("");
      }
    })
  }
  return (
    <div className="mb-5">
      <CustomerNavbar />
      <CustomerSidebar />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-secondary">{service_detail?.service}</h1>
            <img src={`https://service-finder-backup.herokuapp.com/file_storage/service_images/${service_detail?.image}`} width={'100%'} />
            <div className="row">
              <div className="col-md-6">
                <h4>{service_detail?.firstname} {service_detail?.lastname}</h4>
                <h4>Price: Php. {service_detail?.price}</h4>
              </div>
              <div className="col-md-6">
                <a href={`/hire-service/${service_detail?.id}`} className="btn btn-warning float-end mt-2 text-bold"><b>HIRE SERVICE</b></a>
              </div>
            </div>
            <h6><span className="badge bg-primary">{service_detail?.category_id}</span></h6>
            <p>{service_detail?.description}</p>
          </div>
          <div className="col-md-6 mt-5">
            <h4 className="text-secondary">Comments</h4>

            <div style={{ overflowY: 'scroll', height: 400 }}>
              {comments.length > 0 ? comments.map(e => <div className="card p-3 shadow mb-2">
                <span className="text-primary"><b>{e.firstname} {e.lastname}</b></span>
                <p>{e.comment}</p>
                <span>{e.created_at}</span>
              </div>) : <p>No Comment.</p>}
            </div>

            <form action="" onSubmit={submitHandler}>
              <div className="form-group mb-2">
                <textarea value={comment} onChange={(e)=> setComment(e.target.value)} className="form-control" name="" id="comment" placeholder="Comment..." cols="30" rows="5"></textarea>
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