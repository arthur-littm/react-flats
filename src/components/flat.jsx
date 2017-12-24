import React, { Component} from 'react';

class Flat extends Component {
  constructor({ flat }) {
    super(props)
  }

  render() {
    return (
      <div className="flat">
        <img src={flat.imageUrl} alt={flat.name} className="card-user"/>
        <span className="card-category">{`${flat.price} ${flat.priceCurrency}`}</span>
        <div className="card-description">
          <h2>{flat.name}</h2>
        </div>
        <a href="" className="card-link"></a>
      </div>
    )
  }
}

export default Flat;
