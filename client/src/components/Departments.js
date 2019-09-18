import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {Header, Card, Button} from "semantic-ui-react";



class Departments extends React.Component {
  state = { departments: [] };

  componentDidMount() {
    axios.get("/api/departments")
      .then( res => {
        this.setState({ departments: res.data});
      })
      .catch( err => {
        console.log(err);
      })
  };
  
  
  renderDepartments = () => {
    const {departments} = this.state;
    if (departments.length <= 0)
      return <Header as="h2">No Departments</Header>
    return departments.map( department => (
      <Card key={department.id}>
        <Card.Content>
          <Card.Header>{department.name}</Card.Header>
        </Card.Content>
      </Card>
    ))
  }
  


  render() {
    return(
      <div>
        <Header as="h1">Departments</Header>
        <br />
        <Link to="/departments/new">
          <Button color="black">New Department</Button>
        </Link>
        <br />
        <br />
        <Card.Group>
          {this.renderDepartments()}
        </Card.Group>
      </div>
    )
  }
}




export default Departments;