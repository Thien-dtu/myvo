// import React from "react";
import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import image from "../assets/img/download.jpg";
import icon from "../assets/img/icon.png";

function SignUpForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    axios
      // .post("http://localhost:8080/signup", formData)
      .post("http://http://localhost:3000", formData)
      .then((response) => {
        console.log(response.data);
        // Do something with the response data, such as show a success message
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="mt-5">
      <div className="text-center mt-5 mb-5">
        <h1>Sign Up Form</h1>
      </div>
      <div className="container shadow-lg rounded-5">
        <div className="row mt-3" style={{ visibility: "hidden" }}>
          thien oi
        </div>
        <div className="row">
          <div className="col-2"></div>
          <div className="col-auto">
            <img src={image} alt="Image" className="img-fluid mb-4" />
          </div>
          <div className="col-6">
            <form onSubmit={handleSubmit}>
              <h2 className="mb-2">Create account</h2>
              <div className="mb-3">
                <input
                  type="name"
                  className="form-control"
                  placeholder="name"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
              <Button
                variant="warning"
                type="submit"
                className="rounded-pill text-white"
              >
                Sign Up
              </Button>
              <p className="mt-1 mb-2">or</p>
              <Button variant="light" className="rounded-pill" height="16">
                <img
                  src={icon}
                  alt="Google logo"
                  className="mr-2 me-1"
                  style={{ height: "16px", width: "16px" }}
                />
                Sign up with Google
              </Button>
              <p className="mt-3">
                Already have an account? <Link to="/log-in">Login</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
