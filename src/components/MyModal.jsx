import React from "react";
import ShowComment from "./ShowComment";
import { Col, Modal, Button, Container, Row, Form } from "react-bootstrap";
class MyModal extends React.Component {
  state = {
    commentObj: {
      comment: "",
      rate: 5,
      elementId: this.props.selected,
    },
    comments: [],
  };

  handleInput = (e) => {
    let id = e.currentTarget.id;
    this.setState({
      commentObj: {
        ...this.state.commentObj,
        [id]: e.currentTarget.value,
      },
    });
  };
  fetchComments = async (id) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${id}`,
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

  postComment = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify({
            ...this.state.commentObj,
            elementId: this.props.selected,
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDVjOTA2YTFjZmRmMzAwMTVkNjBhYTciLCJpYXQiOjE2MTY2NzkwMTgsImV4cCI6MTYxNzg4ODYxOH0.gHhKFOEEJvurspQQj4MWPwVXrgdzJrL5yM6Q3P3t7Js",
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
    await this.fetchComments(this.props.selected);
  };

  componentDidUpdate = async (prevProps, prevState) => {
    if (prevProps.selected !== this.props.selected) {
      await this.fetchComments(this.props.selected);
    }
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
                <Form onSubmit={this.postComment}>
                  <Form.Group>
                    <Form.Label>Comment:</Form.Label>
                    <Form.Control
                      id="comment"
                      type="textarea"
                      rows={3}
                      placeholder="Write a comment..."
                      value={this.state.commentObj.comment}
                      onChange={this.handleInput}
                    />
                    <Form.Label>Rating:</Form.Label>
                    <Form.Control
                      type="number"
                      max={5}
                      id="rate"
                      placeholder="Rate book"
                      value={this.state.commentObj.rate}
                      onChange={this.handleInput}
                    />
                    <Form.Label>Id:</Form.Label>
                    <Form.Control
                      type="text"
                      id="elementId"
                      placeholder="MovieId"
                      value={this.props.selected}
                      // onChange={this.handleInput}
                      disabled
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Add Comment
                  </Button>
                </Form>
              </Col>
              <Col xs={12} md={4}></Col>
            </Row>
            <Row>
              {this.state.comments.map((comment) => (
                <ShowComment
                  key={Math.ceil(Math.random() * 1000000)}
                  comment={comment.comment}
                />
              ))}
              {this.state.comments.map((comment) => console.log(comment))}
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
