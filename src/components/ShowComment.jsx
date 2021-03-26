import React from "react";

class ShowComment extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.comment}</div>
        <br />
      </div>
    );
  }
}
export default ShowComment;
