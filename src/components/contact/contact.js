import React from "react";
// import InstagramIcon from "@mui/icons-material/Instagram";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";
import Siya from "../../assets/img/IMG_4356.jpg";
import Armaan from "../../assets/img/IMG_4358.jpg";
import Gargi from "../../assets/img/IMG_4357.jpg";
import Mehululi from "../../assets/img/IMG_EEF3B7E17F85-1.jpeg";

import "./contact.css";
export const Contactss = () => {
  return (
    <div className="cotactt">
      <h1>Contact Us</h1>
      {/* <div className="card-section">
        <div className="card-content">
          <div className="image">
            <img src=""></img>
          </div>
          <div className="details">
            <h1 className="names">Armaan Shukla</h1>
            <p className="post">Executive Member</p>
          </div>
          <div className="links">
            <a href="#">
              <img src={navIcon1} alt="" />
            </a>
            <a href="#">
              <img src={navIcon2} alt="" />
            </a>
            <a href="#">
              <img src={navIcon3} alt="" />
            </a>
          </div>
        </div>
      </div> */}
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="our-team">
              <div class="picture">
                <img class="img-fluid" src={Siya} />
              </div>
              <div class="team-content">
                <p class="name">Siya Rana</p>
                <p class="title">hehehe</p>
              </div>
              <div className="social-icon">
                <a href="#">
                  <img src={navIcon1} alt="" />
                </a>
                <a href="#">
                  <img src={navIcon2} alt="" />
                </a>
                <a href="#">
                  <img src={navIcon3} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="our-team">
              <div class="picture">
                <img class="img-fluid" src={Armaan} />
              </div>
              <div class="team-content">
                <p class="name">Armaan Shukla</p>
                <p class="title">abb Mein kya hi likhu apne baare mein</p>
              </div>
              {/* <ul class="social">
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    class="fa fa-facebook"
                    aria-hidden="true"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    class="fa fa-twitter"
                    aria-hidden="true"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    class="fa fa-google-plus"
                    aria-hidden="true"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    class="fa fa-linkedin"
                    aria-hidden="true"
                  ></a>
                </li>
              </ul> */}
              <div className="social-icon">
                <a href="#">
                  <img src={navIcon1} alt="" />
                </a>
                <a href="#">
                  <img src={navIcon2} alt="" />
                </a>
                <a href="#">
                  <img src={navIcon3} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="our-team">
              <div class="picture">
                <img class="img-fluid" src={Mehululi} />
              </div>
              <div class="team-content">
                <p class="name">Mehululiii</p>
                <p class="title">Heampy Coder</p>
              </div>
              <div className="social-icon">
                <a href="#">
                  <img src={navIcon1} alt="" />
                </a>
                <a href="#">
                  <img src={navIcon2} alt="" />
                </a>
                <a href="#">
                  <img src={navIcon3} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="our-team">
              <div class="picture">
                <img class="img-fluid" src={Gargi} />
              </div>
              <div class="team-content">
                <p class="name">Gargii</p>
                <p class="title">yeh kon hai</p>
              </div>
              <div className="social-icon">
                <a href="#">
                  <img src={navIcon1} alt="" />
                </a>
                <a href="#">
                  <img src={navIcon2} alt="" />
                </a>
                <a href="#">
                  <img src={navIcon3} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
