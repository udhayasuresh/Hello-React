import React, { Component } from 'react';
import axios from 'axios'

class MyApp extends Component{
  constructor(){
    super();
      this.state= {
        people:[]
      }
    }
    componentDidMount(){
      axios
      .get("https://reqres.in/api/users")
      .then(response => {
        this.successShow(response);
      })
      .catch(error => {
        this.successShow(error);
      });
    }
    successShow(response) {
      this.setState({
        people: response.data.data
      });
    }
  
  render(){
    return(
      <div>
          <ul>
    {this.state.people.map(({id, first_name, last_name, avatar}) => (
      <li key={id}>
        First Name: {first_name} Last Name: {last_name} avatar: {avatar}
      </li>))
    }
  </ul>
      </div>
    )
  }
}
export default MyApp