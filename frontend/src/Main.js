import React, { useState, useContext } from "react";
import { HashRouter } from "react-router-dom";
import { Button, Link } from "@material-ui/core"

import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    InfoWindow,
} from "react-google-maps";
import mapStyles from './mapStyles';
import { PinContext } from "./contexts"

function Map() {
    const [selectedPin, setSelectedPin] = useState(null);
    const { pins, setPins } = useContext(PinContext);

    return (
        <GoogleMap
            defaultZoom={19}
            defaultCenter={{ lat: 45.5048, lng: -73.5772}}
            options={{ styles: mapStyles }}
        >
            {pins.map(pin => (
                <Marker
                key={ pin.id }
                position={{
                    lat: pin.coordinates[0],
                    lng: pin.coordinates[1]
                }}
                onClick={() => {
                    setSelectedPin(pin);
                }}
                icon={{
                    url:  "https://img.icons8.com/color/48/000000/map-pin.png",
                    scaledSize: new window.google.maps.Size(50, 50)
                }}
                />
            ))}

            {selectedPin && (
                <InfoWindow
                onCloseClick={() => {
                    setSelectedPin(null);
                }}
                position={{
                    lat: selectedPin.coordinates[0],
                    lng: selectedPin.coordinates[1]
                }}
                justify="center"
                >
                    <div>
                        <h2>{selectedPin.location}</h2>
                        <p>{selectedPin.description}</p>
                        <Link
                            component="button"
                            variant="body2"
                            onClick={() => {}}
                        >
                            Expand
                        </Link>
                    </div>
                </InfoWindow>
            )}
        </GoogleMap>
    );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));
const API_KEY = process.env.REACT_APP_KEY;

function getRandomInRange(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
    // .toFixed() returns string, so ' * 1' is a trick to convert to number
}

export default function Main() {
    const [ count, setCount ] = useState(2);
    const [ pins, setPins ] = useState([]);
    const value = { pins, setPins };

    const handleAddPin = () => {
        // generate pin with random latitude and longitude
        const latitude = getRandomInRange(45, 46, 4);
        const longitude = getRandomInRange(-73, -74, 4);
        
        const newPin = {
            id: count,
            coordinates: [latitude, longitude],
            location: "New place",
            description: "Description"
        };
        setCount(count + 1);
        setPins([...pins, newPin]);
        console.log("Added new pin with coordinates: ", latitude, longitude);
        console.log(pins)
    }

    return (
        <PinContext.Provider value={value}>
        <HashRouter>
            <div style={{ width: "97vw", height: "100vh" }}>

            <MapWrapped
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places}`}
                loadingElement={<div style={{ height: `95%` }} />}
                containerElement={<div style={{ height: `95%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                style={{ zIndex: -1 }}
            />
            <Button 
                color="primary" 
                variant="contained" 
                style={{ 
                    zIndex: 1, 
                    position: "absolute", 
                    top: "4vh",
                    right: "12vh"
                }} 
            >Filter</Button>
            <Button 
                color="primary" 
                variant="contained" 
                style={{ 
                    zIndex: 1, 
                    marginTop: "-15vh", 
                    position: "absolute", 
                    right: "12vh", 
                    height: "65px", 
                    width: "50px", 
                    fontSize: "60px", 
                    borderRadius: "50px", 
                    fontWeight: "300" 
                }} 
                onClick={handleAddPin}
            >+</Button>
            </div>
        </HashRouter>
        </PinContext.Provider>
    );
}
