import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Auth } from "aws-amplify";
import "./Login.css";

import { API } from "aws-amplify";

export default class SignUp extends Component 
{
  constructor(props) 
  {
    super(props);
    this.state = 
    {
      isLoading: null,
      description: "",
      title: "",
      userId: "",
      projects: [],
      currentProject: 
      {
        status: "active",
        description: "A project good to join",
        image: "link"
      }
    };
  }

  async componentDidMount() 
  {
    var projects =  API.get("projects", "/projects",
    {
      body: {userId: this.props.userId}// cognitoId not working trying a workaround
    });
    console.log(projects)
    if( projects.length )
      this.setState({projects, currentProject : projects[0]});
  }

  render() 
  {
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
              <h3>Add a skill</h3>
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
                {this.state.projects.map( (project) => <option>{project.title}</option>)}
              </select>
            </div>
            <div className="col-sm-3">
              <ul>
              <li>Status: {this.state.currentProject.status}</li>
              <li>Description: {this.state.currentProject.description}</li>
              <li>ProjectPicture: <img src={this.state.currentProject.image} /> </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="section-border">
          <div className="row">
            <div className="col-sm-4">
              <h3>Search for a Project to join</h3>
              <select onChange={()=> this.onChange()} >
                {this.state.projects.map( (project) => <option>{project.title}</option>)}
              </select>
            </div>
            <div className="col-sm-3">
              <ul>
                <li>Status: {this.state.currentProject.status}</li>
                <li>Description: {this.state.currentProject.description}</li>
                <li>ProjectPicture: <img src={this.state.currentProject.image} /> </li>
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

              <Button  className="btn btn-primary btn-sm" href="/project/new">Create a Project</Button>
            </div>            
          </div>
        </div>

        <div className="section-border">
          <div className="row">
          <h3 className="project-manager">User Manager</h3>
            <div className="col-sm-2">
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
          </div>
        </div> 
     </div>
    );
  }
}