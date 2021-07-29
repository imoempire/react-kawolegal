import React from 'react';
import '../start.css'
import image1 from '../images/kawo-legal-logo.png'
import { Link } from 'react-router-dom';

export default function Login() {
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
                        <Link className="navbar-brand" to="#"><img width="300px" height="120px"
                            src={image1} style={{ paddingBottom: '40px', width: '40%' }} alt="KawoLegal" className="logo" /></Link>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">

                        <ul className="nav navbar-nav navbar-right right-content">
                            <li className="">
                                <Link to="/">Home</Link></li>
                            <li>
                                <Link to="/startups">Startups</Link></li>
                            <li>
                                <Link to="/register">Register</Link></li>
                            <li className="active">
                                <Link className="home" to="/login">Login</Link></li>
                        </ul>

                    </div>
                    
                </div>
            </nav>
            {/* <!-- /.Navbar --> */}

            <div className="container" style={{ paddingBottom: '80px' }}>
                <div className="row">
                    <h3>Already a Member? Login to add your Startup.</h3>
                    <br />
                    <div className="sign-up">
                        <form method="post" action="#">
                            <div className="form-group">
                                <label for="Email">Email address</label>
                                <input type="email" className="form-control" name="email" id="Email" placeholder="Email" required="" />
                            </div>
                                <div className="form-group">
                                    <label for="Password">Password</label>
                                    <input type="password" className="form-control" name="password" id="Password" placeholder="Password" required="" />
                            </div>
                                    <button type="submit" className="btn btn-primary">Sign in</button>
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
                                    <Link to="#">
                                        <span class="iconify" data-icon="jam:facebook-square" data-inline="false" data-width="40px" data-height="40px"></span></Link>
                                    <Link to="#">
                                        <span class="iconify" data-icon="jam:twitter-square" data-inline="false" data-width="40px" data-height="40px" data-rotate="90deg" data-flip="vertical"></span>              </Link>
                                    <Link to="#">
                                        <span class="iconify" data-icon="ri:linkedin-box-line" data-inline="false" data-width="40px" data-height="40px"></span></Link>
                                    <Link to="#">
                                        <span class="iconify" data-icon="akar-icons:instagram-fill" data-inline="false" data-width="40px" data-height="40px"></span></Link>

                                </div>
                            </div>
                        </div>
                    </footer>
      

        </div>
                )
}
