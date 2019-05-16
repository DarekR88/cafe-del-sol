import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { AdminList } from '../../components/AdminList';
import { Input, TextArea, FormBtn } from '../../components/Form';
import { Footer } from '../../components/Footer';
import { Col, Container, Row } from 'reactstrap';
import './Admin.css';

class AdminPage extends Component {
  // Setting our component's initial state
  state = {
    activeTab: '1',
    name: '',
    description: '',
    price: '',
    image: '',
    section: 'appetizer',
    lunchItems: [],
    dinnerItems: [],
    appItems: []
  };

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
      console.log(this.state.activeTab)
    }
  }

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
    this.setState({ section: e.target.value })
    console.log(this.state.section, e.target.value)
  }

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.price) {
      // Need logic for if the Item they are adding is for Appetizer/Lunch/Dinner
      if (this.state.section === "appetizer") {
        let appArray = this.state.appItems
        appArray.push({
          name: this.state.name,
          description: this.state.description,
          price: this.state.price
        })
        API.updateApps({
          items: appArray
        })
          .then(res => this.loadApps())
          .catch(err => console.log(err))
      } else if (this.state.section === "dinner") {
        let dinnerArray = this.state.dinnerItems
        dinnerArray.push({
          name: this.state.name,
          description: this.state.description,
          price: this.state.price
        })
        API.updateDinner({
          items: dinnerArray
        })
          .then(res => this.loadDinner())
          .catch(err => console.log(err))
      } else if (this.state.section === "lunch") {
        let lunchArray = this.state.lunchItems
        lunchArray.push({
          name: this.state.name,
          description: this.state.description,
          price: this.state.price
        })
        API.updateLunch({
          items: lunchArray
        })
          .then(res => this.loadLunch())
          .catch(err => console.log(err))
      }
    }
  }

  deleteItem = (item) => {
    if(this.state.activeTab === '1') {
      let appArray = this.state.appItems
      const newArray = appArray.filter(meal => meal.name !== item)
      API.updateApps({
        items: newArray
      })
        .then(res => this.loadApps())
        .catch(err => console.log(err))
    } else if (this.state.activeTab === '2') {
      let lunchArray = this.state.lunchItems
      const newArray = lunchArray.filter(meal => meal.name !== item)
      API.updateLunch({
        items: newArray
      })
        .then(res => this.loadLunch())
        .catch(err => console.log(err))
    } else if (this.state.activeTab === '3') {
      let dinnerArray = this.state.dinnerItems
      const newArray = dinnerArray.filter(meal => meal.name !== item)
      API.updateDinner({
        items: newArray
      })
        .then(res => this.loadDinner())
        .catch(err => console.log(err))
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
      <Container>
        <Row>
          <Col sm='6'>
          <AdminList className='AdminList' />
          </Col>

          <Col sm='6'>
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
          </Col>
        </Row>
        <div>
          <Footer>
            <span>Copyright 2019</span>
          </Footer>
        </div>
      </Container>
    );
  }
}

export default AdminPage;