import React, { Component } from 'react';
import API from '../../utils/API';
import { Link } from 'react-router-dom';
import { Footer } from '../../components/Footer';
import { Description } from '../../components/Description'
import AdminLogin from '../../components/Modal';
import { Logo } from '../../components/Header';
import { Special } from '../../components/Specials';
import './Front.css';

class FrontPage extends Component {
  render() {
    return (
    <div>
      <div>
        <Logo />
        <Description />
      </div>
      <div>
        <Special />
      </div>
      <Footer>
        <AdminLogin />
      </Footer>
    </div>
    );
  }
}

export default FrontPage;