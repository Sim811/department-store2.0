import React from "react";
import axios from "axios";
import {Header, Form} from "semantic-ui-react";

class DepartmentForm extends React.Component {
  state = {name:""};


  handleChange = (e, {name, value}) => {
    this.setState({ [name]: value })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/Departments", this.state)
      .then( res => {
        
        this.props.history.push("/departments")
      })
      .catch(err => {
        
        console.log(err)
      })

    this.setState({...this.defaultValues})
  }



  render() {
    return (
      <div>
        <Header as="h1">New Department</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input
              label="Name"
              name="name"
              placeholder="Name"
              required
              value={this.state.name}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Button color="blue">Submit</Form.Button>
        </Form>
        
      </div>
    )
  }

}





export default DepartmentForm;