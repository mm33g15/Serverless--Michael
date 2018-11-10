import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Auth } from "aws-amplify";
import "./Login.css";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h1>Profile Info</h1>

        <div className="section-border">
          <div className="row">
            <div className="col-sm-3">
              <h3>Skills</h3>
              <ul>
                <li>Reactjs</li>
                <li>Nodejs</li>
                <li>Python</li>
              </ul>
            </div>
            <div className="col-sm-3">
              <h3>Add a SKill</h3>
              <form>
                <input name="skill" />{"  "}
                <button>Add</button>
              </form>
            </div>
          </div>
          </div>
        </div>
    );
  }
}