import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Card, CardBody } from 'reactstrap';
import classnames from 'classnames';
import API from "../../utils/API";

class MenuList extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      lunchItems: [],
      dinnerItems: [],
      appItems: [],
      backgroundColor: 'white',
      textColor: 'black'
    };

  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  componentDidMount() {
    this.loadLunch()
    this.loadDinner()
    this.loadApps()
    this.loadColors()
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

  loadColors() {
    API.getColors()
      .then(res => this.setState({
        backgroundColor: res.data[0].backgroundColorTwo,
        textColor: res.data[0].textColorTwo
      }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className='MenuList'>
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
                <Card>
                  <CardBody style={{backgroundColor: this.state.backgroundColor, color: this.state.textColor}}>
                    <ul className='app-ul'>
                      {this.state.appItems.map((app, i) => {
                        return (
                          <li key={i}>
                            <p>{app.name}</p>
                            <p>{app.description}</p>
                            <p><b>${app.price}</b></p>
                          </li>
                        )
                      })}
                    </ul>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </TabPane>
        </TabContent>

        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <Card>
                  <CardBody style={{backgroundColor: this.state.backgroundColor, color: this.state.textColor}}>
                    <ul className='lunch-ul'>
                      {this.state.lunchItems.map((lunch, i) => {
                        return (
                          <li key={i}>
                            <p>{lunch.name}</p>
                            <p>{lunch.description}</p>
                            <p><b>${lunch.price}</b></p>
                          </li>
                        )
                      })}
                    </ul>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </TabPane>
        </TabContent>

        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="3">
            <Row>
              <Col sm="12">
                <Card>
                  <CardBody style={{backgroundColor: this.state.backgroundColor, color: this.state.textColor}}>
                    <ul className='lunch-ul'>
                      {this.state.dinnerItems.map((dinner, i) => {
                        return (
                          <li key={i}>
                            <p>{dinner.name}</p>
                            <p>{dinner.description}</p>
                            <p><b>${dinner.price}</b></p>
                          </li>
                        )
                      })}
                    </ul>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

export { MenuList };