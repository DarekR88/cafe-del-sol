import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
// import { XComponentOne, XComponentTwo } from '../../components/XComponent';
import { AdminList } from '../../components/AdminList';
import { Input, TextArea, FormBtn } from '../../components/Form';
import { Footer } from '../../components/Footer';
import { Dropdown } from '../../components/Dropdown';
import './XPageTwo.css';

class XPageTwo extends Component {
  // Setting our component's initial state
  state = {
    name: '',
    description: '',
    price: '',
    image: '',
  };

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
    return (
    <div>
      <Link to={"/"}>
        <strong>Go to XPageOne</strong>
      </Link>
      <br />
      <div className='PageTwoDiv'>
        <AdminList className='AdminList' />
        <form className='Admin-Input'>
          <Input
            value={this.state.name}
            onChange={this.handleInputChange}
            name="name"
            placeholder="Name (required)"
          />
          <Dropdown />
          <br />
          <br />
          <Input
            value={this.state.price}
            onChange={this.handleInputChange}
            name="price"
            placeholder="Price (required)"
          />
          <TextArea
            className="textArea"
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
      </div>
      <Footer>
        <span>Copyright 2019</span>
      </Footer>
    </div>);
  }
}

export default XPageTwo;