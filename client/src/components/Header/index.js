import React, { Component } from 'react';
import {Header} from 'reactstrap';
import './Header.css';

const logo = require('../../assets/img/cafedelsol-logo\ copy.png');

class Logo extends Component {
  render() {
    return (
      <div className='cds-header'>
        <img src={logo} className='cds-logo' />
      </div>
    );
  }
}

export { Logo };