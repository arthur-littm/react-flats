import React, { Component} from 'react';
import Flat from './flat.jsx';

class FlatList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="flat-list">
        { this.props.flats.map((flat) => {
          return <Flat flat={flat} key={flat.lat}/>
        })}
      </div>
    )
  }
}

export default FlatList;
