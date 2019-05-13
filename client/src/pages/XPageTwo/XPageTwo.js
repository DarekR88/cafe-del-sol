import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
// import { XComponentOne, XComponentTwo } from '../../components/XComponent';
import { AdminList } from '../../components/AdminList';
import { Input, TextArea, FormBtn } from '../../components/Form';
import { Footer } from '../../components/Footer';
// import { Dropdown } from '../../components/Dropdown';
import './XPageTwo.css';

class XPageTwo extends Component {
  // Setting our component's initial state
  state = {
    name: '',
    description: '',
    price: '',
    image: '',
    section: 'appetizer',
    lunchItems: [],
    dinnerItems: [],
    appItems: []
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  componentDidMount() {
    this.loadLunch()
    this.loadDinner()
    this.loadApps()
  }

  handleSelect = (e) => {
    this.setState({section: e.target.value})
    console.log(this.state.section, e.target.value)
  }

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.price) {
      console.log(this.state.name)
      console.log(this.state.description)
      console.log(this.state.price)
      console.log(this.state.section)
      // Need logic for if the Item they are adding is for Appetizer/Lunch/Dinner
      let appArray = this.state.appItems
      appArray.push({
        name: this.state.name,
        description: this.state.description,
        price: this.state.price
      })
      API.saveAppetizerItem({
        
      })
    }
  }

  loadLunch() {
    API.getLunch()
      .then(res => this.setState({ lunchItems: res.data[0].items }))
      .catch(err => console.log(err))
  }

  loadApps() {
    API.getAppetizers()
      .then(res => this.setState({ appItems: res.data[0].items }))
      .catch(err => console.log(err))
  }

  loadDinner() {
    API.getDinner()
      .then(res => this.setState({ dinnerItems: res.data[0].items }))
      .catch(err => console.log(err))
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
            <select value={this.state.section} onChange={this.handleSelect}>
              <option value="appetizer">Appetizer</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
            </select>
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
        {/* <Footer>
        <span>Copyright 2019</span>
      </Footer> */}
      </div>);
  }
}

export default XPageTwo;