import React, {useState} from 'react';
import { MapContainer, TileLayer, useMap} from 'react-leaflet';
import { Icon } from 'leaflet';
import '../App.css';


const DisplayMap = () => {

    console.log("Loading Map");
    return (
        <MapContainer 
            className="map"
            center={[39.7837304, -100.4458825]} 
            zoom={4}>
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
                />
        </MapContainer>
    )
}

export default DisplayMap;