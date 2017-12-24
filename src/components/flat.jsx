import React, { Component} from 'react';

class Flat extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="card" style={{backgroundImage: `url(${this.props.flat.imageUrl})`}}>
        <span className="card-category">{`${this.props.flat.price} ${this.props.flat.priceCurrency}`}</span>
        <div className="card-description">
          <h2>{this.props.flat.name}</h2>
        </div>
        <a href="" className="card-link"></a>
      </div>
    )
  }
}

export default Flat;
