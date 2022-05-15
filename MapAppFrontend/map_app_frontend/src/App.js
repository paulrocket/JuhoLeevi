import logo from './logo.svg';
import React from "react";
import { Map, MapContainer, TileLayer, Marker, Popup, } from 'react-leaflet';
import './App.css';
import { Icon } from "leaflet";
import Navbar from './components/Navbar';


export default function App() {
  return (
    <div className="App">
      <Navbar/>
      <hr/>
      <MapContainer center={[50.5, 30.5]} zoom={2}scrollWheelZoom={true}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          zoomOffset={1}
          tileSize={512}
          minZoom={2}
        />
      </MapContainer>
    </div>


  );
}
