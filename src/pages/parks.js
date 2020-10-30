import React from "react";
import { Link } from "react-router-dom";
import HomeButton from "../components/HomeButton";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

function parks(props) {
  const onMarkerClick = (e) => {
    console.log(e);
  };
  const onInfoWindowClose = (e) => {
    console.log(e);
  };

  return (
    <div>
      <div>
        <Link to="/">
          <HomeButton />
        </Link>
      </div>
      <form>
        <div className="form-group">
          <input
            type="input"
            className="form-control email-input-form"
            id=""
            aria-describedby=""
            placeholder="Enter City"
          />
          <button
            name="Search City"
            type="submit"
            value="City Search"
            className="btn btn-primary Find-Park-button"
          >
            Find Parks
          </button>
        </div>
      </form>
      <div className="finder">
        <Map google={props.google} zoom={14}>
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
})(parks)