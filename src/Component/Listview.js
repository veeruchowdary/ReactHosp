import React ,{Component}from 'react'; 
 import { 
  Link
} from "react-router-dom";  

class Listview extends Component {  

constructor(props) {
    super(props); 

    // This binding is necessary to make `this` work in the callback
    this.viewPatient = this.viewPatient.bind(this);
  }

  viewPatient = (e) => {
     alert(e);
  }
 

  render(){
    return ( 
                  <aside className="lg-side">
                  <h3 className="text-danger text-lg-center font-weight-normal">Open Patient</h3>
                          
                      <div className="inbox-head">
                          <form action="#" className="pull-right position">
                              <div className="input-append">
                                   <input type="text" className="form-control search-slt" placeholder="Enter Patient Name" />
                                  <button className="btn sr-btn" type="button">Search</button>
                              </div>
                          </form>
                      </div>
                      <div className="inbox-body"> 
                              
                          <table className="table table-inbox table-hover">
                          <thead>
                              <tr className="unread text-lg-left text-danger">  
                                  <td className="view-message  dont-show">#ID</td> 
                                  <td className="view-message  dont-show">Name</td>
                                  <td className="view-message ">Mobile Number</td>
                                  <td className="view-message  text-right">Time</td>
                              </tr> 
                            </thead>
                            <tbody>
                              <tr className="unread" onClick={() => this.viewPatient("Goal")} >  
                                  <td className="view-message  dont-show">#020</td> 
                                  <td className="view-message  dont-show">Patient Name</td>
                                  <td className="view-message ">0000000000</td>
                                  <td className="view-message  text-right">9:27 AM</td>
                              </tr> 
                            </tbody>
                          </table>
                      </div>
                  </aside>  
    );
  }
}

export default Listview;
