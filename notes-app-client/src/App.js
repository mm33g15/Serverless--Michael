import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Nav, LinkContainer, Navbar, NavItem } from "react-bootstrap";
import styles from "./App.css";
import  Routes from "./Routes";

class App extends Component 
{
	constructor(props) 
	{
 		super(props);
  		this.state = 
  		{
   		 isAuthenticated: false
  		};
	}

userHasAuthenticated = authenticated => {
  this.setState({ isAuthenticated: authenticated });
}

handleLogout = event => {
  this.userHasAuthenticated(false);
}
 render(){ 	
 const childProps = {
  isAuthenticated: this.state.isAuthenticated,
  userHasAuthenticated: this.userHasAuthenticated
	};
  return (
    <div className="App container">
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Home</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
           {  this.state.isAuthenticated
                          ? <NavItem onClick={this.handleLogout}>Logout</NavItem>
                     : <Fragment>
                         <Link to="/signup">SignUp</Link>{" "}<Link to="/login">Login</Link>
                     </Fragment>}

          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
  );
}
}

export default App;