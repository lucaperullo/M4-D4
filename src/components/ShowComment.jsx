import React from "react";

class ShowComment extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.comment}</p>
      </div>
    );
  }
}
export default ShowComment;
