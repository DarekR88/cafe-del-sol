import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';

class AdminLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
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
                    <Input type="email" name="email" id="exampleEmail" placeholder="username@email.com" />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="password" />
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