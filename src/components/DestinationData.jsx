import { Component } from "react";

class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>
        <div className="des-img">
          <img src={this.props.img} alt="Taj Mahal photo" />
        </div>
      </div>
    );
  }
}

export default DestinationData;
