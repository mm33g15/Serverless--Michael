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
      <div>
        
        <div className="row">
          <div className="page-title">
            <h1 className="profile-info">Profile Info</h1>
          </div>
          <div>
            <span className="pull-right user-role">Current user role: Developer</span>
          </div>
        </div>

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

        <div className="section-border">
          <div className="row">
            <div className="col-sm-3">
              <h3>Projects</h3>
              <select>
                <option>Project1</option>
                <option>Project2</option>
                <option>Project3</option>
                <option>Project4</option>
              </select>
            </div>
            <div className="col-sm-3">
              <ul>
                <li>Status: Active</li>
                <li>Description: A good project</li>
                <li>ProjectPicture: </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="section-border">
          <div className="row">
            <div className="col-sm-4">
              <h3>Search for a Project to join</h3>
              <select>
                <option>Project1:</option>
                <option>Project2</option>
                <option>Project3</option>
                <option>Project4</option>
              </select>
            </div>
            <div className="col-sm-3">
              <ul>
                <li>Status: Active</li>
                <li>Description: A good project</li>
                <li>ProjectPicture: </li>
              </ul>
            </div>

            <div className="col-sm-3">
              <button>Apply</button>
            </div>  
          </div>
        </div>

        <div className="section-border">
          <div className="row">
            <h3 className="project-manager">Project Manager</h3>
            <div className="col-sm-1">
              <select>
                <option>Project1</option>
                <option>Project2</option>
                <option>Project3</option>
                <option>Project4</option>
              </select>
            </div>
            <div className="col-sm-3">
              <button className="btn btn-primary btn-sm">Edit</button>{" "}
              <button className="btn btn-sm btn-danger">Delete</button>              
            </div>
            <div className="col-sm-3">
              <button className="btn btn-primary btn-sm">Create a Project</button>
            </div>            
          </div>
        </div>

        <div className="section-border">
          <div className="row">
          <h3 className="project-manager">User Manager</h3>
            <div className="col-sm-">
              <p>Invite User to join Project: </p>
              <select>
                  <option>User1</option>
                  <option>User2</option>
                  <option>User3</option>
                </select>
                {"   "}
              
                <select>
                  <option>Project1</option>
                  <option>Project2</option>
                  <option>Project3</option>
                </select>
                {"   "}
              <button className="btn btn-sm btn-primary">Invite</button>
              <p>Modify/Delete an existing user: </p>
                <select>
                  <option>User1</option>
                  <option>User2</option>
                  <option>User3</option>
                </select>      
             <select>
                  <option>Project1</option>
                  <option>Project2</option>
                  <option>Project3</option>
                </select>
            <p>
             
                
                <button className="btn btn-primary btn-sm">Edit</button>{" "}
                <button className="btn btn-sm btn-danger">Delete</button>                  
              </p>              
            </div>
            
            <div className="col-sm-1">
                          
            </div>                        
          </div>
        </div>               

      </div>
    );
  }
}