import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeButton from "../components/HomeButton";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
function Parks(props) {
  const [newCenter, setCenter] = useState({});
  const onMarkerClick = (e) => {
    console.log(e);
  };
  const onInfoWindowClose = (e) => {
    console.log(e);
  };
  const mapStyles = {
    width: "70%",
    height: "70%",
    margin: "auto",
  };
  return (
    <div>
      <div>
        <Link to="/">
          <HomeButton />
        </Link>
      </div>
      <button
            name="Search City"
            type="submit"
            value="City Search"
            className="btn btn-primary city-button"
            onClick={() => setCenter({lat: 36.1627, lng:-86.7816})}
          >
            Nashville
          </button>
          <button
            name="Search City"
            type="submit"
            value="City Search"
            className="btn btn-primary city-button"
            onClick={() => setCenter({lat: 35.9606, lng:-83.9207})}
          >
            Knoxville
          </button>
          <button
            name="Search City"
            type="submit"
            value="City Search"
            className="btn btn-primary city-button"
            onClick={() => setCenter({lat: 35.1495, lng:-90.0490})}
          >
            Memphis
          </button>
          <button
            name="Search City"
            type="submit"
            value="City Search"
            className="btn btn-primary city-button"
            onClick={() => setCenter({lat: 36.4276, lng:-84.9319})}
          >
            Jamestown
          </button>
      <div className="finder">
        <Map google={props.google} zoom={14} style={mapStyles}
          initialCenter={{ lat: 36.1627, lng: -86.7816 }} center={newCenter}>
          <Marker onClick={onMarkerClick}
            name={'Current location'} />
          <InfoWindow onClose={onInfoWindowClose}>
          </InfoWindow>
        </Map>
      </div>
    </div>
  );
}
export default GoogleApiWrapper({
  apiKey: ('AIzaSyCbXKd1TQJbyiDsxjq4mzq3dSino4c3EkA')
})(Parks)