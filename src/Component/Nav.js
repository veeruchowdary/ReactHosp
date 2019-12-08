import React ,{Component}from 'react'; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; 

import ImgSlider from './Imgslider';
import Login from './Login';

import Patientslist from './Patientslist';
class Nav extends Component {  
  render(){
    return (
      <Router>
         <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
              <div className="container">
                <Link className="navbar-brand js-scroll-trigger" to="/">Clinic</Link>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  Menu
                  <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="navbar-nav text-uppercase ml-auto">
                     
                    <li className="nav-item">
                      <Link   to="/Login"><button type="button" className="btn btn-danger wrn-btn book_app">Login</button></Link>
                    </li>  
                  </ul>
                </div>
              </div> 
          </nav>

          <Switch>
          <Route exact path="/">
             <ImgSlider />
          </Route> 
          <Route exact path="/Login">
             <Login />
          </Route>
          <Route exact path="/Patientslist">
             <Patientslist />
          </Route>
        </Switch>
      
       
  
      </Router>
    );
  }
}

export default Nav;
