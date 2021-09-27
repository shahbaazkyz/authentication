import React from "react";

function Register() {
  const Form =(e)=> {
      e.preventDefault(e);
  }
  return (
   
    <div>
      <form className="row g-3 container-fluid text justify-content-center  " onSubmit={Form}>
        <div className="col-md-8">
          <label htmlFor="inputEmail4" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="inputEmail4" />
        </div>{" "}
        <br />
        <div className="col-md-8">
          <label htmlFor="inputPassword4" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="inputPassword4" />
        </div>
        <div className="col-8">
          <label htmlFor="inputAddress" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>
        <div className="col-md-8">
          <label htmlFor="inputCity" className="form-label">
            City
          </label>
          <input type="text" className="form-control" id="inputCity" />
        </div>
        <div className="col-md-8">
          <label htmlFor="inputState" className="form-label">
            State
          </label>
          <select id="inputState" className="form-select">
            <option selected>Choose...</option>
            <option>Gujranwala</option>
            <option>Lahore</option>
            <option>Islamabad</option>
            <option>Karachi</option>
            <option>Peshawar</option>
            <option>Faislabad</option>
            <option>Sawat</option>
            <option>Muree</option>
          </select>
        </div>
       
        <div className="col-6 justify-content-center">
          <button type="submit" className="btn btn-primary">
            {" "}
            Sign up{" "}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
