import React ,{Component}from 'react'; 

class Bookappointment extends Component{

	render(){
		return(
				<div className="container-fluid"> 
						 
						<section className="search-sec fadeInDown">
						    <div className="container">
						        <form action="#" method="post" >
						            <div className="row">
						                <div className="col-lg-12">
						                    <div className="row">
						                        <div className="col-lg-3 col-md-3 col-sm-12 p-0">
						                            <input type="text" className="form-control search-slt" name="PatientName"  placeholder="Enter Patient Name" />
						                        </div>
						                        <div className="col-lg-3 col-md-3 col-sm-12 p-0">
						                            <input type="number" name="Mobile"  className="form-control search-slt" placeholder="Enter Mobile Number" />
						                        </div>

						                        <div className="col-lg-3 col-md-3 col-sm-12 p-0">
						                            <select className="form-control search-slt" id="exampleFormControlSelect1">
						                                <option>Select Doctor</option>
						                                <option>Example one</option>
						                                <option>Example one</option> 
						                            </select>
						                        </div>
						                        <div className="col-lg-3 col-md-3 col-sm-12 p-0">
						                            <button type="button" className="btn btn-warning wrn-btn book_app">Book Appointment</button>
						                        </div>
						                    </div>
						                </div>
						            </div>
						        </form>
						    </div>
						</section>
					</div>
			)
	}
}

export default  Bookappointment;