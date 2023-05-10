import React from "react";
import "../App.css";
import Phone from "../Phone.png";
import { Container } from "react-bootstrap";
import WeatherAPI from "./WeatherAPI";
import Rotatingtext from "./RotatingText";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <Container fluid>
      <div class="row">
        <div class="col-lg-8">
          <h1 className="title">What's Fair</h1>
          <em>
            <p style={{ fontWeight: 500 }}>
              A unique exciting tool that lets you leave honest fair candid{" "}
              reviews on your latest trip. So that others may know about it.
            </p>
          </em>
          <p style={{ fontWeight: 500 }}>
            Festivals? State Parks? State Fairs? Are you a foodie? If you can go
            to it, You can leave a fair review/comment about it. So what are you
            waiting for......
          </p>
          <p style={{ fontSize: 15 }}>
            <em>
              Not comfortable leaving a reveiw yet? No worries. See what others
              are saying about events happening near you and go enjoy a
              wonderful day.{" "}
            </em>
          </p>
          <a href="http://localhost:3001/signup">
            <button className="WelcomeBtn" type="button">
              Sign Up
            </button>
          </a>
          <em>
            <Link to="/signin" className="nav-link">
              <p>
                🔗 Already a member?{" "}
                <span style={{ color: "purple", textDecoration: "underLine" }}>
                  Sign In Here
                </span>
              </p>
            </Link>
          </em>
          <Rotatingtext />
        </div>
        <div class="col-lg-4">
          <img className="Phone" src={Phone} height={500} alt="iphone-mockup" />
        </div>
        <WeatherAPI />
        <div className="itemBox">
          <em>
            <h2 style={{ marginBottom: 40 }}>
              3 Simple Steps to Enjoy What's Fair
            </h2>
          </em>

          <div class="row">
            <div class="col-lg-4">
              <span className="emoji">📍</span>
              <h3>Attend Event</h3>
            </div>
            <div class="col-lg-4">
              <span className="emoji">😁</span>
              <h3>Try to Enjoy</h3>
            </div>
            <div class="col-lg-4">
              <span className="emoji">✍️</span>
              <h3>Leave A Fair Review</h3>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Welcome;
