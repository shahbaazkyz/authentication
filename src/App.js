import Login from './components/Login';
import './App.css';
import Register from './components/Register';
import Nav from './components/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="">
       <Router>
        <Nav/>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
            <li>
              <Link to="/Register">Register</Link>
            </li>
          </ul>
        </nav> */}


        <Switch>
        <Route path="/" exact>
           <h2>Home</h2>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
     
    </Router>
    </div>
  );
}

export default App;
