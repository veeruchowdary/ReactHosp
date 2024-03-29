import React ,{Component}from 'react'; 


class Footer extends Component{


	render(){

		return(
<footer className="section footer-classic context-dark bg-image" style={{background: "#2d3246"}}>
        <div className="container">
          <div className="row row-30">
            <div className="col-md-4 col-xl-5">
              <div className="pr-xl-4"><a className="brand"><img className="brand-logo-light" src="images/agency/logo-inverse-140x37.png" alt="" width="140" height="37" src="images/agency/logo-retina-inverse-280x74.png 2x" /></a>
                <p>We are an award-winning creative agency, dedicated to the best result in web design, promotion, business consulting, and marketing.</p>
                <p className="rights"><span>©  </span><span className="copyright-year">2018</span><span> </span><span>Waves</span><span>. </span><span>All Rights Reserved.</span></p>
              </div>
            </div>
            <div className="col-md-4">
              <h5>Contacts</h5>
              <dl className="contact-list">
                <dt>Address:</dt>
                <dd>798 South Park Avenue, Jaipur, Raj</dd>
              </dl>
              <dl className="contact-list">
                <dt>email:</dt>
                <dd><a href="mailto:#">dkstudioin@gmail.com</a></dd>
              </dl>
              <dl className="contact-list">
                <dt>phones:</dt>
                <dd><a href="tel:#">https://karosearch.com</a> <span>or</span> <a href="tel:#">https://karosearch.com</a>
                </dd>
              </dl>
            </div>
            <div className="col-md-4 col-xl-3">
              <h5>Links</h5>
              <ul className="nav-list">
                <li><a href="#">About</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contacts</a></li>
                <li><a href="#">Pricing</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row no-gutters social-container">
          <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-facebook"></span><span>Facebook</span></a></div>
          <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-instagram"></span><span>instagram</span></a></div>
          <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-twitter"></span><span>twitter</span></a></div>
          <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-youtube-play"></span><span>google</span></a></div>
        </div>
      </footer>

			)
	}
}

export default Footer;