import React, {useEffect , useState} from 'react'
import { useParams } from 'react-router-dom';

const auth_token = localStorage.getItem("auth_token");

async function updateTransaction(code) {
    const response = await fetch(
      "http://srvcprvdr.agsys.online/api/payment/update",
      {
        method: "POST",
        body: JSON.stringify({ code }),
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

function SuccessPage() {
    
    const [success, setSuccess] = useState(false);

    let { id } = useParams();

    useEffect(()=> {
        updateTransaction(id).then((result)=> {
            if(result){
                setSuccess(true);
            }
        }).catch((error)=> {
            setSuccess(false);
        })
    }, []);

    if(!success){
        return (
            <div className='container mt-5'>
                <h1 className='text-center text-danger'>Can't Access the Page</h1>
                <center>
                <a href="/customer-dashboard" className='btn btn-primary'>Back to Dashboard</a>
                </center>
            </div>
        )
    }

  return (
    <div className='container mt-5'>
        <h1 className='text-center text-success'>Your Payment Has Successfully Processed!</h1>
        <h4 className='text-center'>Service is on the way.</h4>
        <center>
        <a href="customer-dashboard" className='btn btn-primary'>Back to Dashboard</a>
        </center>
    </div>
  )
}

export default SuccessPage