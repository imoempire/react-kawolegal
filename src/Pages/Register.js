import React from 'react'
import {Link} from 'react-router-dom'
import image1 from '../images/kawo-legal-logo.png'
import '../start.css';

export default function Register() {
    return (
        <div>
            <nav className="navbar" style={{ backgroundColor: 'rgb(59, 12, 12)' }}>
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#"><img width="300px" height="120px"
                            src={image1} style={{ paddingBottom: '40px', width: '40%' }} alt="KawoLegal" className="logo" /></a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav navbar-right right-content">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/startups">Startups</Link>
                            </li>
                            <li className="active">
                                <Link className="home" to="/register">Register</Link>
                            </li>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                        </ul>
                    </div>
                    {/* <!-- /.nav-collapse -->  */}
                </div>
            </nav>
            {/* <!-- /.Navbar --> */}
            <div className="container" style={{ paddingBottom: '60px' }}>
                <div className="row">
                    <h3>Join KawoLegal. Sign up to get your Startup listed now!</h3>
                    <br />
                    <div className="signup">
                        <form method="post" action="http://www.kawolegal.com/backend/register">
                            <input type="hidden" name="_token" value="Q3RiPYTH161PUR4dg7lWmoOGJ9pNJn0Ngq7HBqC7" />
                            <div className="form-group">
                                <label for="fullName">Full Name</label>
                                <input type="test" className="form-control" name="name" id="fullName" placeholder="Full Name" required="" />
                            </div>
                            <div className="form-group">
                                <label for="Email">Email address</label>
                                <input type="email" className="form-control" name="email" id="Email" placeholder="Email" required="" />
                            </div>
                            <div className="form-group">
                                <label for="Password">Password</label>
                                <input type="password" className="form-control" name="password" id="Password" placeholder="Password" required="" />
                            </div>
                            <div className="form-group">
                                <label for="password-confirm">Confirm Password</label>
                                <input type="password" className="form-control" name="password_confirmation" id="password-confirm" placeholder="Confirm Password" required="" />
                            </div>
                            <input type="hidden" name="status" value="founder" />
                                <button type="submit" className="btn btn-primary">Sign up</button>
                        </form>  
                    </div>
                </div>
                </div>

        <footer
        className="footer"
        style={{ background: "rgb(59, 12, 12)", width: "100%" }}>
        <div className="container-fluid">
          <div className="row" style={{ width: "100%" }}>
            <div className="col-md-6 foot-txt">
              <ul className="list-unstyled">
                <li className="text-center">
                  {" "}
                  &copy 2017 KawoLegal. All Rights Reserved
                </li>
              </ul>
            </div>
            <div
              className="col-md-6 social"
              style={{ paddingLeft: "30%", height: "50px" }}>
              <a href="#">
              <span class="iconify" data-icon="jam:facebook-square" data-inline="false" data-width="40px" data-height="40px"></span></a>
              <a href="#">
              <span class="iconify" data-icon="jam:twitter-square" data-inline="false" data-width="40px" data-height="40px" data-rotate="90deg" data-flip="vertical"></span>              </a>
              <a href="#">
              <span class="iconify" data-icon="ri:linkedin-box-line" data-inline="false" data-width="40px" data-height="40px"></span></a>
              <a href="#">
              <span class="iconify" data-icon="akar-icons:instagram-fill" data-inline="false" data-width="40px" data-height="40px"></span></a>
              
            </div>
          </div>
        </div>
      </footer>
        </div>
                            )
}
