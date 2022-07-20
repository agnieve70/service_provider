import React, { useState, useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import Input from "../UI/input";

let isMobile = false;

// if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
//     isMobile = true;
// } else {
//     window.location.href = "/";
// }

async function addUser(
  username,
  firstname,
  lastname,
  email,
  password,
  password_confirmation,
  role,
  contactNumber
) {
  let bodyFormData = new FormData();
  bodyFormData.append("firstname", firstname);
  bodyFormData.append("lastname", lastname);
  bodyFormData.append("name", username);
  bodyFormData.append("email", email);
  // bodyFormData.append("profile_picture", profile_picture);
  bodyFormData.append("password", password);
  bodyFormData.append("password_confirmation", password_confirmation);
  bodyFormData.append("role", role);
  bodyFormData.append("contact", contactNumber);

  const res = await fetch(
    "https://service-finder-backup.herokuapp.com/api/register",
    {
      method: "POST",
      body: bodyFormData,
    }
  );

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "Something wnt wrong");
  }

  return data;
}

function Signup() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
//   const [profile_picture, setProfilePicture] = useState();
  const [role, setRole] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [contactNumber, setContactNumber] = useState("");
  const [checkEula, setCheckEula] = useState(false);

  async function submitHandler(event) {
    event.preventDefault();

    setIsLoading(true);

    try {
      const result1 = await addUser(
        username,
        firstname,
        lastname,
        email,
        password,
        password_confirmation,
        role,
        contactNumber
      );
      if (result1) {
        alert("Registered Success");
        window.location.href = "/";
        console.log("SUCCESS!!");
      }
      setIsLoading(false);
      // window.location.href = '/';
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  }

  return (
    <div className="container-fluid">
      {!checkEula ? (
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card p-5 shadow mt-5">
              <h4 className="text-center mb-4">Terms And Agreement</h4>
              <p>
                To protect your website, company, and customers, you need to
                state your terms of use in clear, simple, and easily understood
                language. Our simple terms and conditions template can instantly
                generate a custom terms of service policy for your business.
                Once your free terms of service policy is generated, you’ll be
                able to continue customizing and making adjustments until it’s
                perfect. Fill out the simple form below to get started.
              </p>

              <center>
                <button
                  onClick={() => {
                    setCheckEula(true);
                  }}
                  className="btn btn-success"
                >
                  Proceed
                </button>
              </center>
            </div>
          </div>
        </div>
      ) : (
        <div className="row justify-content-center vh-100">
          <div className="col-md-6">
            <div className="card p-5 shadow mt-5">
              <h4 className="text-center mb-4">Create Account</h4>
              {isLoading ? (
                <div
                  style={{ margin: "auto" }}
                  className="spinner-border"
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : null}

              {error ? (
                <div
                  className="alert alert-danger alert-dismissible fade show"
                  role="alert"
                >
                  {error.message}
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  ></button>
                </div>
              ) : null}
              <form action="" onSubmit={submitHandler}>
                <div className="row">
                  <div className="col-md-6">
                    <Input
                      label_id={"firstname"}
                      label={"Firstname"}
                      type={"text"}
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <Input
                      label_id={"lastname"}
                      label={"Lastname"}
                      type={"text"}
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <Input
                      label_id={"name"}
                      label={"Username"}
                      type={"text"}
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="form-group mb-3">
                      <Input
                        label_id={"contact_number"}
                        label={"Contact Number"}
                        type={"text"}
                        value={contactNumber}
                        onChange={(e) => setContactNumber(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group mb-3">
                      <label htmlFor="role">Role</label>
                      <select value={role} onChange={(e)=> {setRole(e.target.value)}} name="role" id="role" className="form-control">
                        <option value="" disabled selected>
                          Select Role
                        </option>
                        <option value="service provider">
                          Service Provider
                        </option>
                        <option value="customer">Customer</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <Input
                      label_id={"email"}
                      label={"Email"}
                      type={"text"}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <Input
                      label_id={"password"}
                      label={"Password"}
                      type={"password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <Input
                      label_id={"password_confirmation"}
                      label={"Password Confirmation"}
                      type={"password"}
                      value={password_confirmation}
                      onChange={(e) => setPasswordConfirmation(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-6">
                    <div className="d-grid gap-2">
                      <button type="submit" className="py-2 btn btn-success">
                        REGISTER
                      </button>
                        <p>
                          Already a member?
                          <LinkContainer to="/">
                            <a>Login</a>
                          </LinkContainer>
                        </p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Signup;
