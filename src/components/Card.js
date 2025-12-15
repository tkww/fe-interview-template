import React from "react";
import './Card.css';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }

  handleClick = (e) => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };

  render() {
    const { name, previewUrl, themeDesigner } = this.props.themeResults;

    return (
      <div
        className="card"
        style={{ borderColor: this.state.clicked ? "#333" : "#ccc" }}
        onClick={this.handleClick}
      >
        <h1 className="card-title">{name}</h1>
        <img
          alt={name}
          src={previewUrl}
          style={{ maxWidth: 100, maxHeight: "auto" }}
        />
        {themeDesigner && <p>Desgined by {themeDesigner.name}</p>}
      </div>
    );
  }
}

export default Card;