import React, { Component } from 'react';
import API from '../../utils/API';
import { Link } from 'react-router-dom';
// import { XComponentOne, XComponentTwo } from '../../components/XComponent';
import { Footer } from '../../components/Footer';
import { FoodImg, Description } from '../../components/Description'
import { AdminLogin } from '../../components/Modal';

class XPage extends Component {
  state = {
    array: ['X', 'Page', 'Array'],
    string: 'XPageString',
  };


  // componentDidMount() {
  //   API.getDocuments()
  //     .then((res) => { console.log(res.data) })
  //     .catch((err) => console.log(err));
  // }


  render() {
    return (
    <div>
      <Link to={"/XPageTwo"}>
        <strong>Go to XPageTwo</strong>
      </Link>
      <div>
        <FoodImg className='food-img' />
        <Description className='descr-box'>
        </Description>
      </div>
      <Footer>
        <AdminLogin />
      </Footer>
    </div>
    );
  }
}

export default XPage;
