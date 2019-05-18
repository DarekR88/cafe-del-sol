import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Container } from 'reactstrap';
import classnames from 'classnames';
import { Input, TextArea, FormBtn } from '../../components/Form';
import { Footer } from '../../components/Footer';
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
    appItems: [],
    bColorOne: 'gray',
    bColorTwo: 'white',
    textColorOne: 'black',
    textColorTwo: 'black',
    deal: 'Two for one tacos on Tuesdays!'
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
    this.loadColors()
  }

  handleSelect = (e) => {
    this.setState({ section: e.target.value })
  }

  handleColorSelectOne = (e) => {
    this.setState({ bColorOne: e.target.value })
  }

  handleColorSelectTwo = (e) => {
    this.setState({ bColorTwo: e.target.value })
  }

  handleColorSelectThree = (e) => {
    this.setState({ textColorOne: e.target.value })
  }

  handleColorSelectFour = (e) => {
    this.setState({ textColorTwo: e.target.value })
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

  handleColorSubmit = event => {
    event.preventDefault();
    API.updateColors({
      backgroundColorOne: this.state.bColorOne,
      backgroundColorTwo: this.state.bColorTwo,
      textColorOne: this.state.textColorOne,
      textColorTwo: this.state.textColorTwo,
      deal: this.state.deal
    })
      .then(res => this.loadColors())
      .catch(err => console.log(err))
  }

  deleteItem = (item) => {
    if (this.state.activeTab === '1') {
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
      .then(res => this.setState({
        lunchItems: res.data[0].items,
        name: '',
        description: '',
        price: ''
      }))
      .catch(err => console.log(err))
  }

  loadApps() {
    API.getAppetizers()
      .then(res => this.setState({
        appItems: res.data[0].items,
        name: '',
        description: '',
        price: ''
      }))
      .catch(err => console.log(err))
  }

  loadDinner() {
    API.getDinner()
      .then(res => this.setState({
        dinnerItems: res.data[0].items,
        name: '',
        description: '',
        price: ''
      }))
      .catch(err => console.log(err))
  }

  loadColors() {
    API.getColors()
      .then(res => this.setState({
        bColorOne: res.data[0].backgroundColorOne,
        bColorTwo: res.data[0].backgroundColorTwo,
        textColorOne: res.data[0].textColorOne,
        textColorTwo: res.data[0].textColorTwo,
        deal: res.data[0].deal
      }))
      .catch(err => console.log(err))
  }

  render() {
    const headerStyle = {
      backgroundColor: this.state.bColorOne,
      color: this.state.textColorOne
    }

    const bodyStyle = {
      backgroundColor: this.state.bColorTwo,
      color: this.state.textColorTwo
    }

    return (
      <Container>
        <Row>
          <Col sm='6'>
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
                              <p>${app.price}</p>
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
                              <p>${lunch.price}</p>
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
                              <p>${dinner.price}</p>
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
        <Row>
          <Col sm='6'>
            <div style={bodyStyle} className="preview">
                <div style={headerStyle} className="previewHeader"><h4 className="previewTitle">Cafe Del Sol</h4></div>
                <div style={bodyStyle} className="previewBody">{this.state.deal}</div>
            </div>
          </Col>

          <Col sm='6'>
            <form className='Admin-Input'>
              <p>Background color 1</p>
              <select value={this.state.bColorOne} onChange={this.handleColorSelectOne}>
                <option value="gray">gray</option>
                <option value="black">black</option>
                <option value="red">red</option>
                <option value="blue">blue</option>
                <option value="yellow">yellow</option>
                <option value="green">green</option>
                <option value="white">white</option>
              </select>
              <br />
              <br />
              <p>Background color 2</p>
              <select value={this.state.bColorTwo} onChange={this.handleColorSelectTwo}>
                <option value="gray">gray</option>
                <option value="black">black</option>
                <option value="red">red</option>
                <option value="blue">blue</option>
                <option value="yellow">yellow</option>
                <option value="green">green</option>
                <option value="white">white</option>
              </select>
              <br />
              <br />
              <p>Text color 1</p>
              <select value={this.state.textColorOne} onChange={this.handleColorSelectThree}>
                <option value="gray">gray</option>
                <option value="black">black</option>
                <option value="red">red</option>
                <option value="blue">blue</option>
                <option value="yellow">yellow</option>
                <option value="green">green</option>
                <option value="white">white</option>
              </select>
              <br />
              <br />
              <p>Text color 2</p>
              <select value={this.state.textColorTwo} onChange={this.handleColorSelectFour}>
                <option value="gray">gray</option>
                <option value="black">black</option>
                <option value="red">red</option>
                <option value="blue">blue</option>
                <option value="yellow">yellow</option>
                <option value="green">green</option>
                <option value="white">white</option>
              </select>
              <br />
              <br />
              <p>Seasonal Deal</p>
              <TextArea
                className="dealText"
                value={this.state.deal}
                onChange={this.handleInputChange}
                name="deal"
                placeholder="Seasonal Deal"
              />
              <FormBtn
                onClick={this.handleColorSubmit}
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