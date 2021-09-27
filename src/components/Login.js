import React from "react";
import {useState} from "react";
import axios from "axios";
import {
useHistory,
 
} from "react-router-dom";

function Login() {
  const [email , setEmail] = useState("");
  const [password , setpassword] = useState("");
  const history = useHistory();
  
  const emptyLogin =(e)=>{
    e.preventDefault();
  const params = new URLSearchParams();
  params.append("email", email)
  params.append("password", password)
    if(email !== '' && password !== ''){
      console.log("All Set")
      axios.post('http://localhost:4000/login',params, {
       
      })
      .then(function (response) {
        console.log(response);
        localStorage.setItem('loginData', JSON.stringify(response.data));
        history.push("/dashBoard")
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    else{
      alert(" Please enter Email & password ")
    }
  };
  return (
    <> 
    <h1 className="text-center m-5 text-primary "> Login Form </h1>
    
     
      <form className="row g-3   justify-content-center  " >
        <div className="col-md-7">
          <label htmlFor="inputEmail4" className="form-label text-primary">
            Email
          </label>
          <input type="email" className="form-control" id="inputEmail4" value={email} onChange={(e)=>setEmail(e.target.value)} />
        </div> 
        <div className="col-md-7 ">
          <label htmlFor="inputPassword4" className="form-label text-primary">
            Password
          </label>
          <input type="password" className="form-control" id="inputPassword4" value={password} onChange={(e)=>setpassword(e.target.value)}/>
        </div>
    
        
        
        
        <div className="col-7 justify-content-center">
          <button type="submit" className="btn btn-primary" onClick={emptyLogin}> Sign in </button>
        </div>
      </form>
   
    </>
  );
}

export default Login;
