import React ,{Component}from 'react'; 
 import { 
  Link
} from "react-router-dom";  

class Patientview extends Component {  

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
                      <div className="inbox-body"> 
                          <div id="accordion"> 
                              <div className="card">
                              <a className="card-link" data-toggle="collapse" href="#collapseOne">
                                <div className="card-header">
                                  <div ><p className="inline"> Patie Name 
                                   <span className=" text-danger float-right">  12-Sep-19 </span>
                                   </p>
                                   </div>
                                </div>

                                  </a>
                                <div id="collapseOne" className="collapse" data-parent="#accordion">
                                  <div className="card-body">
                                    <table className="table table-inbox table-hover">
                           
                            <tbody>
                              <tr className=" text-danger"  >  
                                  <td className="view-message  dont-show">#020</td> 
                                  <td className="view-message  dont-show">Patient Name</td>
                                  <td className="view-message ">0000000000</td>
                                  <td className="view-message  text-right">9:27 AM</td>
                              </tr> 
                            </tbody>
                          </table>
                                  </div>
                                </div>
                              </div>
  
                            </div>
                      </div>
                  </aside>  
    );
  }
}

export default Patientview;
