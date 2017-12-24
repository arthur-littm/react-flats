import React, { Component} from 'react';
import FlatList from './flat_list.jsx';
import flats from '../../data/flats.js';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="container">
        <FlatList flats={flats}/>
        <div className="map-container">
        </div>
      </div>
    )
  }
}

export default App;
