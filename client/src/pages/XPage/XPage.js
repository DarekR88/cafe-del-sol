import React, { Component } from 'react';
import API from '../../utils/API';
import { Link } from 'react-router-dom';
import { XComponentOne, XComponentTwo } from '../../components/XComponent';
import { Footer } from '../../components/Footer';

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
      <XComponentOne array={this.state.array} string={this.state.string} />
      <XComponentTwo array={this.state.array} string={this.state.string} />
      <Footer>
        <span>Footer Content/Admin Login</span>
      </Footer>
    </div>
    );
  }
}

export default XPage;
