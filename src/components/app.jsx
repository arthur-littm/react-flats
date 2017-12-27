import React, { Component} from 'react';
import FlatList from './flat_list.jsx';
import flats from './../../data/flats.js';
import GoogleMap from './google_map.jsx'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="container">
        <FlatList flats={flats}/>
        <div className="map-container">
          <GoogleMap flats={flats}/>
        </div>
      </div>
    )
  }
}

export default App;
