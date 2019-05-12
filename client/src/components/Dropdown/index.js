import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.select = this.select.bind(this);
    this.state = {
      dropdownOpen: false,
      value: 'Select'
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  select(event) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
      value: event.target.innerText
    });
  }

  render() {
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret size="sm">
          <span
          onClick={this.toggle}
          data-toggle='dropdown'
          aria-haspopup='true'
          aria-expanded={this.state.dropdownOpen}
          >{this.state.value}</span>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={this.select}>Appetizer</DropdownItem>
          <DropdownItem onClick={this.select}>Lunch</DropdownItem>
          <DropdownItem onClick={this.select}>Dinner</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

export { Dropdown };