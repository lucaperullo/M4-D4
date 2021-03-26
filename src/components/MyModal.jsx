import React from "react";
import { Col, Modal, Button, Container, Row } from "react-bootstrap";
class MyModal extends React.Component {
  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.onHide}
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <Row>
              <Col xs={6} md={9}>
                {this.props.title}
              </Col>
              <Col xs={6} md={3}>
                <img
                  style={{ borderRadius: "50%" }}
                  width="90"
                  height="90"
                  src={this.props.image}
                ></img>
              </Col>
            </Row>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
              <Col xs={12} md={8}>
                <h6>Add Review :</h6>
                <form>
                  <textarea id= cols={45} rows={12}></textarea>

                  <input type="number" max={5}></input>
                  <input
                    type="text"
                    value={this.props.selected}
                    disabled
                  ></input>
                </form>
              </Col>
              <Col xs={12} md={4}></Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                {this.props.year}
              </Col>
              <Col xs={12} md={6}>
                <p className="text-muted">{this.props.type}</p>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => this.props.onHide()}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
export default MyModal;
