import React from "react";
import BackgroundImage from "../BackgroundImage.jpg";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div style={{ textAlign: "center", margin: "10px" }}>
      <h1 className="Error" style={{ fontSize: "200px", fontWeight: "800" }}>
        4🎡4
      </h1>
      <h3>Opps... This isnt Fair You Had To See This</h3>
      <strong>
        <em>
          <a href="/">
            <button type="button">Back To Home</button>
          </a>
        </em>
      </strong>
    </div>
  );
}

export default ErrorPage;
