import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import API from "../../utils/API"

class AdminList extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      lunchItems: [],
      dinnerItems: [],
      appItems: []
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
  }

  loadLunch() {
    API.getLunch()
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }

  loadApps(){
    API.getAppetizers()
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }

  render() {
    return (
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
                  <li className='app-list'>One</li>
                  <li className='app-list'>Two</li>
                  <li className='app-list'>Three</li>
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
                  <li className='lunch-list'>two</li>
                  <li className='lunch-list'>Two</li>
                  <li className='lunch-list'>Three</li>
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
                  <li className='dinner-list'>three</li>
                  <li className='dinner-list'>Two</li>
                  <li className='dinner-list'>Three</li>
                </ul>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

export { AdminList };