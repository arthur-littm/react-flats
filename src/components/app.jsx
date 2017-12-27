import React, { Component} from 'react';
import FlatList from './flat_list.jsx';
import flats from './../../data/flats.js';
import GoogleMap from './google_map.jsx'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedMarker: null
    }
  }

  changeMarker = (markerKey) => {
    this.setState({
      selectedMarker: markerKey
    })
  }

  render() {
    return (
      <div className="container">
        <FlatList flats={flats} changeMarker={this.changeMarker}/>
        <div className="map-container">
          <GoogleMap flats={flats} selectedMarker={this.state.selectedMarker}/>
        </div>
      </div>
    )
  }
}

export default App;
