import React, { Component } from 'react';
import API from '../../utils/API';
import { Link } from 'react-router-dom';
// import { XComponentOne, XComponentTwo } from '../../components/XComponent';
import { Footer } from '../../components/Footer';
import { AdminList } from '../../components/AdminList';

class XPage extends Component {

  
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
      <Link to={"/XPageTwo"}>
        <strong>Go to XPageTwo</strong>
      </Link>
      <Footer>
        <span>Footer Content/Admin Login</span>
      </Footer>
    </div>
    );
  }
}

export default XPage;
