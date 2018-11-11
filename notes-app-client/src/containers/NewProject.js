
import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import config from "../config";
import "./NewProject.css";
import { API } from "aws-amplify";


export default class NewProject extends Component {
  constructor(props) {
    super(props);

    this.file = null;

    this.state = {
      isLoading: null,
      description: "",
      title: ""
    };
  }

  validateForm() {
    return this.state.description.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleFileChange = event => {
    this.file = event.target.files[0];
  }

  handleSubmit = async event => {
    event.preventDefault();
  
    if (this.file && this.file.size > config.MAX_ATTACHMENT_SIZE) {
      alert(`Please pick a file smaller than ${config.MAX_ATTACHMENT_SIZE/1000000} MB.`);
      return;
    }
  
    this.setState({ isLoading: true });
  
    try {
      await this.createProject({
        title: this.state.title,
        description: this.state.description
      });
      this.props.history.push("/");
    } catch (e) {
      alert(e);
      this.setState({ isLoading: false });
    }
  }
  
  createProject(project) {
    console.log(project)
    return API.post("projects", "/projects", {
      body: project
    });
  }

  render() {
    return (
      <div className="NewProject">
        <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="title">
                <ControlLabel>Title</ControlLabel>{' '}
                <FormControl  onChange={this.handleChange} value={this.state.title} type="text" placeholder="Project title" />
            </FormGroup>
          <FormGroup controlId="description">
            <ControlLabel>Description</ControlLabel>
            <FormControl
              onChange={this.handleChange}
              value={this.state.description}
              placeholder="Project Description"
              componentClass="textarea"
            />
          </FormGroup>
          <FormGroup controlId="file">
            <ControlLabel>Image</ControlLabel>
            <FormControl onChange={this.handleFileChange} type="file" />
          </FormGroup>
          <LoaderButton
            block
            bsStyle="primary"
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            isLoading={this.state.isLoading}
            text="Create"
            loadingText="Creating…"
          />
        </form>
      </div>
    );
  }
}