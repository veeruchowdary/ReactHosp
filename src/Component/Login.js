import React ,{Component}from 'react'; 
 import { 
  Link
} from "react-router-dom"; 

class Login extends Component {  
  render(){
    return (
       
			 <div className="wrapper fadeInDown Login">
				  <div id="formContent"> 
				     
				    <form>
				      <input type="text" id="login" className="fadeIn second logintext" name="login" placeholder="Username" />
				      <input type="text" id="password" className="fadeIn third logintext" name="login" placeholder="Password" />
				      <select className="form-control fadeIn fourth  search-slt" id="exampleFormControlSelect1">
						                                <option>Select Type</option>
						                                <option>Admin</option>
						                                <option>Doctor</option>
						                                <option>Patient</option> 
						                            </select>

				      <button type="button" className="btn btn-danger wrn-btn book_app fadeIn fourth">Login</button>
				    </form> 
				    <div id="formFooter">
				      <Link className="underlineHover" to="/" > Go to the Site </Link>
				    </div>

				  </div>
				</div>
    );
  }
}

export default Login;
