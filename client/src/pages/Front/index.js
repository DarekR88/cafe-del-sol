import React, { Component } from 'react';
import API from '../../utils/API';
import { Link } from 'react-router-dom';
import { Footer } from '../../components/Footer';
import { Description } from '../../components/Description'
import AdminLogin from '../../components/Modal';
import { AdminList } from '../../components/AdminList';

class FrontPage extends Component {
  // Setting our component's initial state

  state = {
    
  }
  
  componentDidMount() {
    this.loadLunch()
    this.loadDinner()
    this.loadApps()
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
      <div>
        <Description />
      </div>
      <Footer>
        <AdminLogin />
      </Footer>
    </div>
    );
  }
}

export default FrontPage;