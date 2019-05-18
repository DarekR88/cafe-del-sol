import React, { Component } from 'react';
import {Header} from 'reactstrap';
import './Header.css';
import API from "../../utils/API";

const logo = require('../../assets/img/cafedelsol-logo.png');

class Logo extends Component {
  state = {
    backgroundColor: '',
    textColor: ''
  }

  componentDidMount() {
    this.loadColors()
  }

  loadColors() {
    API.getColors()
      .then(res => this.setState({
        backgroundColor: res.data[0].backgroundColorOne,
        textColor: res.data[0].textColorOne
      }))
      .catch(err => console.log(err))
  }

  render() {
    const logoStyle = {
      backgroundColor: this.state.backgroundColor,
      color: this.state.textColor
    }
    return (
      <div style={logoStyle}>
        <img src={logo} className='cds-logo' />
        <p className='cds-font'>Cafe Del Sol</p>
      </div>
    );
  }
}

export { Logo };