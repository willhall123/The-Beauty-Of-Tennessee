
import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import HomeButton from "../components/HomeButton";
import axios from "axios";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

function Members(props) {
  const [users, setUsers] = useState([]);
  const [position, setPosition] = useState([]);
  const [center, setCenter] = useState({});
  useEffect(()=>{
    axios.post("/api/users")
    .then(users => setUsers(users.data))
  },[]);
  const mapStyles = {
    width: "70%",
    height: "70%",
    margin: "auto",
  };
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
      <Link to="parks">
        <button type="button" className="btn btn-secondary btn-lg find-park-button">
          Select Park
        </button>
      </Link>
      <div className="data">
  {users.map(user => <button className="btn btn-secondary btn-lg find-park-button" onClick={() => {
    setPosition(user.coordinates);
    setCenter(user.coordinates);
  }}> {user.email}:{user.location}</button>)}
      </div>
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
})(Members)
