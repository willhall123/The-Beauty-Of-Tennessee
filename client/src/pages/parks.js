import React, { useState, useEffect }  from "react";
import { Link, Redirect } from "react-router-dom";
import HomeButton from "../components/HomeButton";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import axios from "axios";

function Parks(props) {
  const [center, setCenter] = useState({});
  const [position, setPosition] = useState({});
  const [name, setName] = useState("");
  

  const onInfoWindowClose = (e) => {
  };
  const mapStyles = {
    width: "70%",
    height: "70%",
    margin: "auto",
  };
//---------------------------

  const onSubmit  = (e) => {
    e.preventDefault();
    console.log("hitsubmite")
    const data = {
      coordinates: position,
      location: name,
    }
      axios
        .post("/api/user/update/place/"+props.user._id, data )
        .then(res => console.log(res.data));
  }
  //------------------
if (!props.user){
  return <Redirect to="/"/>;
}
  return (
    <div>
      <div>
        <Link to="/">
          <HomeButton />
        </Link>
      </div>
      <Link to="members">
          <button type="button" className="btn btn-secondary othermembers-button">
            Members
        </button>
        </Link>
      <button
            name="Nash"
            type="submit"
            value="City Search"
            className="btn btn-primary city-button"
            onClick={() => {
              setCenter({lat: 36.1627, lng: -86.7816});
              setPosition({lat: 36.1627, lng: -86.7816});
              setName("Chruch Street Park");
            }}
          >
            Chruch Street Park
          </button>
          <button
            name="Nash"
            type="submit"
            value="City Search"
            className="btn btn-primary city-button"
            onClick={() => {
              setCenter({lat: 36.1490, lng: -86.8120});
              setPosition({lat: 36.1490, lng: -86.8120});
              setName("Centennial Park");
            }}

          >
            Centennial Park
          </button>
          <button
            name="Nash"
            type="submit"
            value="City Search"
            className="btn btn-primary city-button"
            onClick={() => {
              setCenter({lat: 36.1709, lng: -86.7876});
              setPosition({lat: 36.1709, lng: -86.7876});
              setName("Bicentennial Capitol Mall State Park");
          }}
          >
            Bicentennial Capitol Mall State Park
          </button>
          <button
            name="Nash"
            type="submit"
            value="City Search"
            className="btn btn-primary city-button"
            onClick={() => {
              setCenter({lat: 36.1624, lng: -86.7701});
              setPosition({lat: 36.1624, lng: -86.7701});
              setName("Cumberland Park");
          }}
          >
            Cumberland Park
          </button>
          <button
            name="Nash"
            type="submit"
            value="City Search"
            className="btn btn-primary city-button"
            onClick={() => {
              setCenter({lat: 36.1875, lng: -86.6838});
              setPosition({lat: 36.1875, lng: -86.6838});
              setName("Two Rivers");
            }}
          >
            Two Rivers
          </button>

          <button
            name="Save"
            type="submit"
            value="City Search"
            className="btn btn-primary save-button"
            onClick={(e) => {
              onSubmit(e);
            }}
          >
            Save
          </button>
          
      <div className="finder">
        <Map google={props.google} zoom={11} style={mapStyles}
          initialCenter={{ lat: 36.1627, lng: -86.7816 }} center={center}>
          <Marker position={position}/>
        </Map>
      </div>
    </div>
  );
}
export default GoogleApiWrapper({
  apiKey: ('AIzaSyCbXKd1TQJbyiDsxjq4mzq3dSino4c3EkA')
})(Parks)