import React from "react";
import ShowComment from "./ShowComment";
import { Col, Modal, Button, Container, Row } from "react-bootstrap";
class MyModal extends React.Component {
  state = {
    commentObj: {
      comment: "",
      rate: 5,
      elementId: this.props.selected,
    },
    comments: [],
  };

  postComment = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.selected}`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            body: JSON.stringify(this.state.commentObj),
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDVkOWJlNWI5MTNkOTAwMTU5MzA0OTUiLCJpYXQiOjE2MTY3NDc0OTMsImV4cCI6MTYxNzk1NzA5M30.dGRBTOELc_zweYJ_BjZDDPESsE7wln6nsqVSdprlxDg",
          },
        }
      );
      if (response.ok) {
        console.log("comment added");
      } else {
        console.log("Error happened");
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.selected}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDVkOWJlNWI5MTNkOTAwMTU5MzA0OTUiLCJpYXQiOjE2MTY3NDc0OTMsImV4cCI6MTYxNzk1NzA5M30.dGRBTOELc_zweYJ_BjZDDPESsE7wln6nsqVSdprlxDg",
          },
        }
      );
      const data = await response.json();
      this.setState({ comments: data });
    } catch (error) {
      console.log(error);
    }
  };

  handleInput = (e) => {
    let id = e.currentTarget.id;
    this.setState({
      commentObj: {
        ...this.state.commentObj,
        [id]: id === "elementId" ? this.state.selected : e.currentTarget.value,
      }, // commentObj['name']:"ff"
    });
  };
  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.onHide}
        aria-labelledby="contained-modal-title-center"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-center">
            <Row>
              <Col xs={6} md={9}>
                {this.props.title}
              </Col>
              <Col xs={6} md={3}>
                <img
                  style={{ borderRadius: "50%" }}
                  width="90"
                  height="90"
                  alt={this.props.title}
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
                <form onSubmit={this.postComment}>
                  <textarea
                    id="comment"
                    cols={45}
                    onChange={this.handleInput}
                    rows={12}
                  ></textarea>

                  <input
                    onChange={this.handleInput}
                    id="rate"
                    type="number"
                    max={5}
                  ></input>
                  <input
                    type="text"
                    id="elementId"
                    value={this.props.selected}
                    onChange={this.handleInput}
                    disabled
                  ></input>
                  <button type="submit">Add Comment</button>
                </form>
              </Col>
              <Col xs={12} md={4}></Col>
            </Row>
            <Row>
              {this.state.comments.map((comment) => (
                <ShowComment comment={comment} />
              ))}
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
