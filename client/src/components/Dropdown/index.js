import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret size="sm">
          Select
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Appetizer</DropdownItem>
          <DropdownItem>Lunch</DropdownItem>
          <DropdownItem>Dinner</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

export { Dropdown };