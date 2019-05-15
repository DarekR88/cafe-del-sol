
import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
// import { XComponentOne, XComponentTwo } from '../../components/XComponent';
// import { AdminList } from '../../components/AdminList';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { Input, TextArea, FormBtn } from '../../components/Form';
import { Footer } from '../../components/Footer';
// import { Dropdown } from '../../components/Dropdown';
import './XPageTwo.css';

class XPageTwo extends Component {
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
      <div>
        <Link to={"/"}>
          <strong>Go to XPageOne</strong>
        </Link>
        <br />
        <div className='PageTwoDiv'>
          <div className='AdminList'>
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '1' })}
                  onClick={() => { this.toggle('1'); }}
                >
                  Appetizer
            </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '2' })}
                  onClick={() => { this.toggle('2'); }}
                >
                  Lunch
            </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '3' })}
                  onClick={() => { this.toggle('3'); }}
                >
                  Dinner
            </NavLink>
              </NavItem>
            </Nav>

            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col sm="12">
                    <ul className='app-ul'>
                      {this.state.appItems.map((app, i) => {
                        return (
                          <li key={i}>
                            <p>{app.name}</p>
                            <p>{app.description}</p>
                            <p>{app.price}</p>
                            <button onClick={() => this.deleteItem(app.name)}>Delete item</button>
                          </li>
                        )
                      })}
                    </ul>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>

            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="2">
                <Row>
                  <Col sm="12">
                    <ul className='lunch-ul'>
                      {this.state.lunchItems.map((lunch, i) => {
                        return (
                          <li key={i}>
                            <p>{lunch.name}</p>
                            <p>{lunch.description}</p>
                            <p>{lunch.price}</p>
                            <button onClick={() => this.deleteItem(lunch.name)}>Delete item</button>
                          </li>
                        )
                      })}
                    </ul>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>

            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="3">
                <Row>
                  <Col sm="12">
                    <ul className='dinner-ul'>
                      {this.state.dinnerItems.map((dinner, i) => {
                        return (
                          <li key={i}>
                            <p>{dinner.name}</p>
                            <p>{dinner.description}</p>
                            <p>{dinner.price}</p>
                            <button onClick={() => this.deleteItem(dinner.name)}>Delete item</button>
                          </li>
                        )
                      })}
                    </ul>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </div>
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
