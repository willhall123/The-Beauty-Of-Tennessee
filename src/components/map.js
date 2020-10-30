import React from 'react';
import logo from './logo.svg';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


function map(props) {

  const onMarkerClick = (e) => {
    console.log(e);
  }; 

  const onInfoWindowClose = (e) => {
    console.log(e);
  }; 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Map google={props.google} zoom={14}>
 
        <Marker onClick={onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={onInfoWindowClose}>
          
        </InfoWindow>
      </Map>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyCbXKd1TQJbyiDsxjq4mzq3dSino4c3EkA')
})(map)