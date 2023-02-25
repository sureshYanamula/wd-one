import React, { useState } from "react";

function FormsComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (event) => {
    // console.log(event.target.value, "event");
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    // console.log(event.target.value, "event");
    setPassword(event.target.value);
  };

  const handleLoginButton = (e) => {
    e.preventDefault();
    console.log(email, password);
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
            value={email}
            onChange={handleEmail}
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
            value={password}
            onChange={handlePassword}
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="please enter your password"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ margin: "0px 50px" }}
          onClick={handleLoginButton}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default FormsComponent;
