import React, { Component } from 'react';
import './Specials.css';
import API from "../../utils/API";

class Special extends Component {
  state = {
    backgroundColor: '',
    textColor: '',
    deal: ''
  }

  componentDidMount() {
    this.loadColors()
  }

  loadColors() {
    API.getColors()
      .then(res => this.setState({
        backgroundColor: res.data[0].backgroundColorTwo,
        textColor: res.data[0].textColorTwo,
        deal: res.data[0].deal
      }))
      .catch(err => console.log(err))
  }

  render() {
    const divStyle = {
      backgroundColor: this.state.backgroundColor,
      color: this.state.textColor
    }
    return (
      <div style={divStyle}>
          <p className='specials-font'>Seasonal Deals:</p>
          <p className='specials-text'>{this.state.deal}</p>
      </div>
    );
  }
}

export { Special };