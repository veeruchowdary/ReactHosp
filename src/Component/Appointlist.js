import React ,{Component}from 'react'; 
 import { 
  Link
} from "react-router-dom";  
class Login extends Component {  
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
                              <Link to="#"><i className="fa fa-bookmark-o"></i> Important</Link>
                          </li>
                          <li>
                              <Link to="#"><i className=" fa fa-external-link"></i> Drafts <span className="badge badge-info float-right">30</span></Link>
                          </li>
                          <li>
                              <Link to="#"><i className=" fa fa-trash-o"></i> Trash</Link>
                          </li>
                      </ul>
                      
 

                  </aside>
                  <aside className="lg-side">
                      <div className="inbox-head">
                          <h3>Inbox</h3>
                          <form action="#" className="pull-right position">
                              <div className="input-append">
                                   <input type="text" className="form-control search-slt" placeholder="Enter Patient Name" />
                                  <button className="btn sr-btn" type="button">Search</button>
                              </div>
                          </form>
                      </div>
                      <div className="inbox-body"> 
                              
                          <table className="table table-inbox table-hover">
                            <tbody>
                              <tr className="unread">
                                  <td className="inbox-small-cells">
                                      <input type="checkbox" className="mail-checkbox" />
                                  </td>
                                  <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                                  <td className="view-message  dont-show">PHPClass</td>
                                  <td className="view-message ">Added a new class: Login Class Fast Site</td>
                                  <td className="view-message  inbox-small-cells"><i className="fa fa-paperclip"></i></td>
                                  <td className="view-message  text-right">9:27 AM</td>
                              </tr>
                              <tr className="unread">
                                  <td className="inbox-small-cells">
                                      <input type="checkbox" className="mail-checkbox" />
                                  </td>
                                  <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                                  <td className="view-message dont-show">Google Webmaster </td>
                                  <td className="view-message">Improve the search presence of WebSite</td>
                                  <td className="view-message inbox-small-cells"></td>
                                  <td className="view-message text-right">March 15</td>
                              </tr>
                              <tr className="">
                                  <td className="inbox-small-cells">
                                      <input type="checkbox" className="mail-checkbox" />
                                  </td>
                                  <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                                  <td className="view-message dont-show">JW Player</td>
                                  <td className="view-message">Last Chance: Upgrade to Pro for </td>
                                  <td className="view-message inbox-small-cells"></td>
                                  <td className="view-message text-right">March 15</td>
                              </tr>
                              <tr className="">
                                  <td className="inbox-small-cells">
                                      <input type="checkbox" className="mail-checkbox" />
                                  </td>
                                  <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                                  <td className="view-message dont-show">Tim Reid, S P N</td>
                                  <td className="view-message">Boost Your Website Traffic</td>
                                  <td className="view-message inbox-small-cells"></td>
                                  <td className="view-message text-right">April 01</td>
                              </tr>
                              <tr className="">
                                  <td className="inbox-small-cells">
                                      <input type="checkbox" className="mail-checkbox" />
                                  </td>
                                  <td className="inbox-small-cells"><i className="fa fa-star inbox-started"></i></td>
                                  <td className="view-message dont-show">Freelancer.com <span className="badge badge-danger float-right">urgent</span></td>
                                  <td className="view-message">Stop wasting your visitors </td>
                                  <td className="view-message inbox-small-cells"></td>
                                  <td className="view-message text-right">May 23</td>
                              </tr>
                              <tr className="">
                                  <td className="inbox-small-cells">
                                      <input type="checkbox" className="mail-checkbox" />
                                  </td>
                                  <td className="inbox-small-cells"><i className="fa fa-star inbox-started"></i></td>
                                  <td className="view-message dont-show">WOW Slider </td>
                                  <td className="view-message">New WOW Slider v7.8 - 67% off</td>
                                  <td className="view-message inbox-small-cells"><i className="fa fa-paperclip"></i></td>
                                  <td className="view-message text-right">March 14</td>
                              </tr>
                               
                                
                          </tbody>
                          </table>
                      </div>
                  </aside>  
   </div>
</div>
    );
  }
}

export default Login;
