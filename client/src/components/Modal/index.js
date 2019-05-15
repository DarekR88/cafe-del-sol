import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';

class AdminLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      email: '',
      password: '',
      redirect: false
    };

    this.toggle = this.toggle.bind(this);
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  }

  toggle() {
    // if(this.state.email === 'CafeDelSol@coldmail.com' && this.state.password === 'abc123') {

    // }
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Button color="warning" size="lg" block onClick={this.toggle}>Admin Login</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Admin Login</ModalHeader>
          <ModalBody>
            {/* Form begins here */}
            <Form>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="username@email.com" value={this.state.email} onChange={this.handleInputChange} />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="password" value={this.state.password} onChange={this.handleInputChange} />
                  </FormGroup>
                </Col>
              </Row>
            </Form>
            {/* End of Form */}
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Login</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export { AdminLogin };