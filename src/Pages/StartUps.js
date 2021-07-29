import React from 'react';
import '../start.css';
import { Link } from 'react-router-dom';
import image1 from '../images/kawo-legal-logo.png';
import image2 from '../images/0.28953600 1525875669.jpeg';
import image3 from '../images/0.04969800 1525875195.jpeg';
import image4 from '../images/0.74704000 1495547354.png';
import image5 from '../images/0.30509000 1491418179.png';
import image6 from '../images/0.21645800 1491246616.png';

export default function StartUps() {
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
                        <a className="navbar-brand" to="#">
        <img width="300px" height="120px" src={image1} style={{ paddingBottom: '40px', width: '40%' }} alt="KawoLegal" className="logo" /></a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">

                        <ul className="nav navbar-nav navbar-right right-content">
                            <li>
                                <Link to="/home">Home</Link>
                            </li>
                            <li className="active">
                                <Link className="home" to="/startups">Startups</Link>
                            </li>
                            <li>
                                <Link to="/register">Register</Link>
                            </li>
                            <li >
                                <Link to="/login">Login</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

{/* <!-- /.Navbar --> */}

                <div className="container">
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="input-group ">
                            <input type="text" className="form-control" name="query" placeholder="search Startup by name or industry" id="txtSearch" style={{width: '100%'}} /> 
                                <div className="input-group-btn">
                                    <button className="btn btn-primary" type="search">
                                        <span className="glyphicon glyphicon-search"> Search</span>
                                    </button>
                                </div>
                        </div>
                            <div className="col-md-1"></div>
                        </div>
                </div>


                    <div className="container" style={{marginLeft: '20%', paddingTop: '50px'}} >
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-10 content">
                                <div className="row">
                                    <div className="col-md-2">
                                        <div className="profile">
                                        <img src={image2} className="img-responsive dp" alt="company logo" />
                                        </div>
                                    </div>
                                    <div className="col-md-10"> <a to="http://www.kawolegal.com/startup/9"><h3>tutahub</h3></a>
                                        <p>a website for tutorials</p>
                                        <p><Link to="http://www.kawolegal.com/startup/9"><button className="btn btn-default btn-sm">See full details</button></Link></p><hr/>
                                    </div>
                                </div>

                            <div className="row">
                                        <div className="col-md-2">
                                            <div className="profile">
                                                <h3><img src={image3} className="img-responsive dp" alt="company logo" /></h3>
                                            </div>
                                        </div>
                                            <div className="col-md-10">
                                                <Link to="http://www.kawolegal.com/startup/8"><h3>Anditer</h3></Link>
                                                <p>Anditer is a tech blog</p>
                                                <p><Link to="http://www.kawolegal.com/startup/8"><button className="btn btn-default btn-sm">See full details</button></Link></p> <hr/>
                                            </div>
                                    </div>

                                            <div className="row">
                                                <div className="col-md-2">
                                                    <div className="profile">
                                                        <h3><img src={image4} className="img-responsive dp" alt="company logo" /></h3>
                                                    </div>
                                                </div>
                                                    <div className="col-md-10">
                                                        <Link to="http://www.kawolegal.com/startup/5"><h3>Think and Zoom</h3></Link>
                                                        <p>Providing solutions for the visually impaired, such as mind-controlled zooming, and wearable controlled zooming. </p>
                                                        <p><Link to="http://www.kawolegal.com/startup/5"><button className="btn btn-default btn-sm">See full details</button></Link></p>
                                                        <hr/>
                                                    </div>
                                            </div>

                                                    <div className="row">
                                                        <div className="col-md-2">
                                                            <div className="profile"><h3>
                                                                <img src={image5} className="img-responsive dp" alt="company logo" /></h3></div>
                                                        </div>
                                                        <div className="col-md-10"><a to="http://www.kawolegal.com/startup/3"><h3>Slatecube</h3></a>
                                                                <p>Slatecube helps job seekers develop job-relevant skills,
                                                                    gain work experience, and land well paying jobs through world-className up-skilling courses and virtual internships.</p>
                                                                <p><Link to="http://www.kawolegal.com/startup/3"><button className="btn btn-default btn-sm">See full details</button></Link></p>
                                                                <hr/>
                                                        </div> 
                                                    </div>






                                                            <div className="row">
                                                                <div className="col-md-2">
                                                                    <div className="profile">
                                                                        <h3><img src={image6} className="img-responsive dp" alt="company logo"/></h3>
                                                                    </div> 
                                                                </div>
                                                                <div className="col-md-10"><a to="http://www.kawolegal.com/startup/2"><h3>Sleekjob Academy</h3></a>
                                                                        <p> Trains world className software developers in Ghana and matches them to employment opportunities </p>
                                                                        <p> <Link to="http://www.kawolegal.com/startup/2"><button className="btn btn-default btn-sm">See full details</button></Link> </p>
                                                                        <hr/>
                                                                </div>
                                                            </div>

                                                                </div>
                                                                <nav aria-label="navigate">
                                                                    <ul className="pager" />
                                                                </nav>
                                                                 </div>
                                                                <div className="col-md-1"></div>
                                                                </div>
                    <footer className="footer"
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
