import { Link } from "react-router-dom";
import "../App.css";
import image1 from "../images/kawo-legal-logo.png";
import image2 from "../images/office.jpg";

function Home() {
  return (
    <div classNameName="App">
      <nav className="navbar navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">
              <img
                width="300px"
                height="120px"
                src={image1}
                alt="KawoLegal"
                className="logo"
              />
            </a>
          </div>
          
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right right-content">
              <li className="active">
                <Link className="home" to="/home">Home</Link>
              </li>
              <li>
                <Link to="/startups">Startups</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="images">
        <div className="images-inner">
          <div className="item active">
            <img
              src={image2}
              className="imag"
              style={{ width: "100%", height: "89vh" }}
              alt="..."
            />
            <div className="carousel-caption">
              <div className="container container-flex cont">
                <div className="col-md-12 text-center">
                  <h1>KAWOLEGAL</h1>
                  <h3>A collaborative ecosystem for problem <br /> solvers and
                    support for Startups.</h3><br />
                  <p>
                    <Link to="/register">
                      <button className="btn btn-info btn-lg text-btn">
                        Register Now!
                      </button>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
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
  );
}

export default Home;
