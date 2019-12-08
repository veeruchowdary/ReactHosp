import React ,{Component}from 'react'; 
 import { 
  Link
} from "react-router-dom";  
import Listview from './Listview';

class Patientslist extends Component {  
  render(){
    return (
        <div className="container-fluid">
        <div className="mail-box">
                  <aside className="sm-side">
                       
                      <ul className="inbox-nav inbox-divider">
                          <li className="active">
                              <Link to="#" className="text-danger"><i className="fa fa-inbox"></i> Open Patient <span className="badge badge-danger float-right">2</span></Link>

                          </li>
                          <li>
                              <Link to="#"><i className="fa fa-envelope-o"></i> Viewed Patient</Link>
                          </li>
                           
                          <li>
                              <Link to="#"><i className=" fa fa-trash-o"></i> Medical view</Link>
                          </li>
                      </ul>
                      
 

                  </aside>
                  <Listview /> 
   </div>
</div>
    );
  }
}

export default Patientslist;
