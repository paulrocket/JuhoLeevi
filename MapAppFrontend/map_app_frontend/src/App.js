import logo from './logo.svg';
import React from "react";
import { Map, MapContainer, TileLayer, Marker, Popup, } from 'react-leaflet';
import './App.css';
import { Icon } from "leaflet";
import Navbar from './components/Navbar';
import LoginPage from './components/LoginPage';
import {Routes,Route,Navigate} from 'react-router-dom';


export default function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Navigate to="/"/>} />
          <Route path="/LoginPage" element={<LoginPage/>} />
        </Routes>
      <hr/>
        <div id="theMap">
        <MapContainer center={[43.00, -79.00]} zoom={2}scrollWheelZoom={true}>
          <TileLayer
            url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
            attribution={'<a href="http://osm.org/copyright">OpenStreetMap</a>'}
            zoomOffset={1}
            tileSize={256}
            minZoom={2}
          />
        </MapContainer>
        </div>
    </div>
  );
}
