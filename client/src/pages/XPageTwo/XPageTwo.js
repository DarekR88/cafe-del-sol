import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { XComponentOne, XComponentTwo } from '../../components/XComponent';
import { AdminList } from '../../components/AdminList';
import { Input, TextArea, FormBtn } from '../../components/Form';
import './XPageTwo.css';

class XPageTwo extends Component {
  // Setting our component's initial state
  state = {
    name: '',
    description: '',
    price: '',
    image: '',
  };

  // componentDidMount() {
  //   API.getDocuments()
  //     .then((res) => { console.log(res.data) })
  //     .catch((err) => console.log(err));
  // }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.price) {
      // Need logic for if the Item they are adding is for Appetizer/Lunch/Dinner
    }
  }
  render() {
    return (<div>
      <Link to={"/"}>
        <strong>Go to XPageOne</strong>
      </Link>
      {/* <XComponentOne array={this.state.array} string={this.state.string} />
      <XComponentTwo array={this.state.array} string={this.state.string} /> */}
      <br />
      <AdminList className='AdminList' />
      <form className='Admin-Input'>
        <Input
          value={this.state.name}
          onChange={this.handleInputChange}
          name="name"
          placeholder="Name (required)"
        />
        <Input
          value={this.state.price}
          onChange={this.handleInputChange}
          name="price"
          placeholder="Price (required)"
        />
        <TextArea
          value={this.state.description}
          onChange={this.handleInputChange}
          name="description"
          placeholder="Description (Optional)"
        />
        <FormBtn
          disabled={!(this.state.name && this.state.price)}
          onClick={this.handleFormSubmit}
        >
          Submit
        </FormBtn>
      </form>
    </div>);
  }
}

export default XPageTwo;