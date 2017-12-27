import React, { Component} from 'react';

class Marker extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="map-marker">
        <span>{this.props.price}€</span>
      </div>
    )
  }
}

export default Marker;
