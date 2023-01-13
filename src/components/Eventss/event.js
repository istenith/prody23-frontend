import React from "react";
import "./eventss.css";
const Eventss = () => {
  return (<div id='event'>
    <div className="#event">
      <div class="header">
        <h1>Events</h1>

        <p>Here is The list of Event going to be organise soon</p>
      </div>
      <div class="row1-container">
        <div class="box box-down cyan">
          <h2 className="event-head">Abhedya 2.0</h2>
          <p>Monitors activity to identify project roadblocks</p>
          <img
            className="event-img"
            src="https://assets.codepen.io/2301174/icon-supervisor.svg"
            alt=""
          />
        </div>
        <div class="box red">
          <h2 className="event-head">Atmo Switch</h2>
          <p>
            Scans our talent network to create the optimal team for your project
          </p>
          <img
            className="event-img"
            src="https://assets.codepen.io/2301174/icon-team-builder.svg"
            alt=""
          />
        </div>
        /
        <div class="box box-down blue">
          <h2 className="event-head">Code Express</h2>
          <p>
            Uses data from past projects to provide better delivery estimates
          </p>
          <img
            className="event-img"
            src="https://assets.codepen.io/2301174/icon-calculator.svg"
            alt=""
          />
        </div>
      </div>
      <div class="row2-container">
        <div class="box orange">
          <h2 className="event-head">Mathematica</h2>
          <p>
            An event for the mathematician in you who loves to tinker around
            with equations, curves, and graphs. Let out your mathematical
            creativity to bring to life everyday things using multiple
            equations, in this one-of-a-kind event.
          </p>
          <img
            className="event-img"
            src="https://assets.codepen.io/2301174/icon-karma.svg"
            alt=""
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Eventss;
