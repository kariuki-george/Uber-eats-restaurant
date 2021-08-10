import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import "./Footer.scss";

function Footer() {
  return (
    <footer>
      <div className="top">
        <div className="left">
          <img
            src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/c266ad32e5e88af804b3a1b6b60098f9.svg"
            alt=""
          />
          <div>
            <Link>
              <img
                src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/d0558d91063038236b60e3ef71fdc1fd.svg"
                alt=""
              />
            </Link>
            <Link>
              <img
                src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/cf6dad406fdfdcd290fd40de9008ae50.png"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="right">
          <div>
            <ul>
              <li>
                <Link>Get Help</Link>
              </li>
              <li>
                <Link>Add your restaturant</Link>
              </li>
              <li>
                <Link>Sign up to deliver</Link>
              </li>
              <li>
                <Link>Create a business account</Link>
              </li>
              <li>
                <Link>Save on your first order</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <Link>Restaurant near me</Link>
              </li>
              <li>
                <Link>View all cities</Link>
              </li>
              <li>
                <Link>View all cities</Link>
              </li>
              <li>
                <Link>Read our blog</Link>
              </li>
              <li>
                <Link>About Uber Eats</Link>
              </li>
              <li>
                <Link>English</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="top">
          <div>
            <a href="https://www.facebook.com/ubereats">
              <FacebookIcon />
            </a>
            <a href="https://www.twitter.com/ubereats">
              <TwitterIcon />
            </a>
            <a href="https://www.instagram.com/ubereats">
              <InstagramIcon />
            </a>
          </div>
          <div>
            <ul>
              <li>
                <Link>Privacy Policy</Link>
              </li>
              <li>
                <Link>Terms</Link>
              </li>
              <li>
                <Link>Pricing</Link>
              </li>
              <li>
                <Link>Do not sell my info(California)</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="divbottom">
          <h5>
            This site is protected by reCAPTCHA and the Google Privacy Policy
            and Terms of Service apply.
          </h5>
          <h5>© 2021 Uber Technologies Inc.</h5>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
