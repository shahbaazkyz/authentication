import React from 'react'
import {
    useHistory,
     
    } from "react-router-dom";

const Dashboard = () => {
    const history = useHistory();
    const getUser =localStorage.getItem('loginData')
    const handleLogout = () =>{
        localStorage.removeItem("loginData")
        history.push('/Login');
    }
    if(getUser === null){
        history.push('/Login')
    }

    return (
        <div>
            <h1>Here is the user All information</h1>
            <div className="col-7 justify-content-center">
          <button type="submit" className="btn btn-primary" onClick={handleLogout}> LogOut </button>
        </div>
            
        </div>
    )
}

export default Dashboard
