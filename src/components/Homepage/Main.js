import React from "react";
import ToggleButton from "../Body/ToggleButton";
import "./Homepage.css";
import "../../style.css";
import Card from "../Body/Card";

export default function Main() {
  return (
    <div className="main--container light--grey">
      <div className="toggle--container">
        <ToggleButton />
      </div>
      <div className="card--container">
        <Card
          coverImg="algo--visualiser--logo.jpg"
          title="Algorithm Visualiser"
          route="algorithm"
        />
        <Card
          coverImg="code--visualiser--logo.png"
          title="Code Visualiser"
          route="code"
        />
      </div>
    </div>
  );
}
