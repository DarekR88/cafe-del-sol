import React, { Component } from 'react';
import API from '../../utils/API';
import { Link } from 'react-router-dom';
import { Footer } from '../../components/Footer';
import { Description } from '../../components/Description'
import AdminLogin from '../../components/Modal';
import { Logo } from '../../components/Header';
import { Special } from '../../components/Specials';

class FrontPage extends Component {
  // Setting our component's initial state

  state = {
    
  }
  

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