import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { Nav, LinkContainer, Navbar, NavItem } from "react-bootstrap";
import styles from "./App.css";
import { Auth } from "aws-amplify";
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

  async componentDidMount() {
    try {
      await Auth.currentSession();//is user logged in
      this.userHasAuthenticated(true);
    }
    catch(e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }

    this.setState({ isAuthenticating: false });
  }


userHasAuthenticated = authenticated => {
  this.setState({ isAuthenticated: authenticated });
}

handleLogout = async event => 
{
  await Auth.signOut();
  this.userHasAuthenticated(false);
  this.props.history.push("/login");
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
                          ? 
                          <Fragment>
                            <NavItem href="/profile">Profile</NavItem>
                            <NavItem onClick={this.handleLogout}>Logout</NavItem>
                          </Fragment>
                     : <Fragment>
                         <Link to="/signup">SignUp</Link>{"  "}
                         <Link to="/login">Login</Link>
                     </Fragment>}

          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes childProps={childProps} />
    </div>
  );
}
}

export default withRouter(App);