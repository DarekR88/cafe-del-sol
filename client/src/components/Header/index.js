import React, { Component } from 'react';
import {Header} from 'reactstrap';
import './Header.css';

const logo = require('../../assets/img/cafedelsol-logo.png');

class Logo extends Component {
  render() {
    return (
      <div>
        <img src={logo} className='cds-logo' />
        <p className='cds-font'>Cafe Del Sol</p>
      </div>
    );
  }
}

export { Logo };