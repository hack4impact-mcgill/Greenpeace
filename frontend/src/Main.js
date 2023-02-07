import React, { useState, useEffect } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";

import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    InfoWindow,
} from "react-google-maps";
import mapStyles from './mapStyles';
import * as parkData from "./data/parkData.json";


function Map() {
const [selectedPark, setSelectedPark] = useState(null);

useEffect(() => {
    const listener = e => {
    if (e.key === "Escape") {
        setSelectedPark(null);
    }
    };
    window.addEventListener("keydown", listener);

    return () => {
    window.removeEventListener("keydown", listener);
    };
}, []);


return (
    <GoogleMap
    defaultZoom={19}
    defaultCenter={{ lat: 45.5048, lng: -73.5772}}
    options={{ styles: mapStyles }}
    >
    {parkData.features.map(park => (
        <Marker
        key={park.properties.PARK_ID}
        position={{
            lat: park.geometry.coordinates[0],
            lng: park.geometry.coordinates[1]
        }}
        onClick={() => {
            setSelectedPark(park);
        }}
        icon={{
            url:  "https://img.icons8.com/color/48/000000/map-pin.png",
            scaledSize: new window.google.maps.Size(50, 50)
        }}
        />
    ))}

    {selectedPark && (
        <InfoWindow
        onCloseClick={() => {
            setSelectedPark(null);
        }}
        position={{
            lat: selectedPark.geometry.coordinates[0],
            lng: selectedPark.geometry.coordinates[1]
        }}
        >
        <div>
            <h2>{selectedPark.properties.NAME}</h2>
            <p>{selectedPark.properties.DESCRIPTIO}</p>
        </div>
        </InfoWindow>
    )}
    </GoogleMap>
    
);
}

const MapWrapped = withScriptjs(withGoogleMap(Map));
const API_KEY = process.env.REACT_APP_KEY;

export default function Main() {
    return (
        <HashRouter>
            <div style={{ width: "97vw", height: "100vh" }}>
            <MapWrapped
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places}`}
                loadingElement={<div style={{ height: `80%` }} />}
                containerElement={<div style={{ height: `80%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
            </div>
            
        </HashRouter>
    );
}
