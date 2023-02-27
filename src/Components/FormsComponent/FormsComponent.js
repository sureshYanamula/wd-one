import React, { useState } from "react";

function FormsComponent() {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [designation, setDesignation] = useState("");
  const [details, setDetails] = useState({
    email: "",
    password: "",
    designation: "",
  });
  const [error, setError] = useState("");

  //   const handleEmail = (event) => {
  //     // console.log(event.target.value, "event");
  //     setEmail(event.target.value);
  //   };

  //   const handlePassword = (event) => {
  //     // console.log(event.target.value, "event");
  //     setPassword(event.target.value);
  //   };

  const handleLoginButton = (e) => {
    e.preventDefault();
    console.log(details, "details");
    if (details.password.length <= 10) {
      setError("Password length should be atleast 10 charecters");
    } else {
      setError("");
    }
    // console.log(email, password, designation);
  };

  //   const handleDesignation = (e) => {
  //     setDesignation(e.target.value);
  //   };

  const handleFormDetails = (e) => {
    // console.log(e);
    setDetails({ ...details, [e.target.name]: e.target.value });
    // details = {
    //   password: "",
    //   designation: "",
    //   email: "isjgiow@gmail.com",
    // };

    // details = {
    //   designation: "",
    //   email: "isjgiow@gmail.com",
    //   password: "Suresh@1234",
    // };

    // details = {
    //     email: "isjgiow@gmail.com",
    //     password: "Suresh@1234",
    //     designation: "Developer"
    // }
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <form onSubmit={handleLoginButton}>
        <div className="mb-3" style={{ margin: "0px 50px" }}>
          <label for="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={details.email}
            onChange={handleFormDetails}
            id="exampleFormControlInput1"
            placeholder="please enter your email"
          />
        </div>
        <div class="mb-3" style={{ margin: "0px 50px" }}>
          <label for="exampleFormControlInput1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={details.password}
            onChange={handleFormDetails}
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="please enter your password"
          />
        </div>
        {error.length ? (
          <p style={{ color: "red", margin: "0px 50px" }}>{error}</p>
        ) : null}
        <div className="mb-3" style={{ margin: "0px 50px" }}>
          <label for="exampleFormControlInput1" className="form-label">
            Designation
          </label>
          <input
            type="text"
            name="designation"
            value={details.designation}
            onChange={handleFormDetails}
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="please enter your designation"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ margin: "0px 50px" }}
          onClick={handleLoginButton}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormsComponent;
