import React, { useState, useEffect } from "react";
import { HashRouter, Redirect } from "react-router-dom";
import { Button, Link } from "@material-ui/core"

import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    InfoWindow,
} from "react-google-maps";
import mapStyles from './mapStyles';

function Map() {
    const [selectedPin, setSelectedPin] = useState(null);
    const [pins, setPins] = useState([]);
    const [isListening, setIsListening] = useState(false);

    const createPin = (coordinates, name, description) => {
        setPins([...pins, {
            id: pins.length,
            coordinates: coordinates,
            location: name,
            description: description
        }])
    }

    return (
        <GoogleMap
            defaultZoom={19}
            defaultCenter={{ lat: 45.5048, lng: -73.5772}}
            options={{styles: mapStyles}}
            onClick={( event ) => {
                if (isListening) {
                    createPin([event.latLng.lat(), event.latLng.lng()], "New Pin", "New Description");
                    setIsListening(false);
                    }
                }
            }
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
                    scaledSize: new window.google.maps.Size(70, 70)
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
const API_KEY = process.env.REACT_APP_API_KEY;

export default function Main() {
    const [ isListening, setIsListening ] = useState(false);
    const [ mapOpacity, setMapOpacity ] = useState(1) 
    const [ goToLogin, setGoToLogin ] = useState(false);

    useEffect(() => {
        if (isListening) {
            window.addEventListener('mousedown', handleCreatePin)

            // Set a timeout to stop listening after 10 seconds
            const timer = setTimeout(() => {
                setIsListening(false)
                setMapOpacity(1)
            }, 10000);

            // Cleanup function to remove the event listener
            return () => {
                window.removeEventListener('mousedown', handleCreatePin)
                clearTimeout(timer)
            };
        }

    }, [isListening])

    if (goToLogin) {
        return <Redirect to="/login" />
    }

    const handleCreatePin = (event) => {
        console.log(event)
    }

    return (
        

            <HashRouter>
                <div style={{ width: "97vw", height: "100vh", opacity: mapOpacity }}>

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
                    onClick={()=>{
                        setGoToLogin(true);
                    }}
                >Sign In</Button>
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
                    onClick={() => {
                        setIsListening(true)
                        setMapOpacity(0.5)
                    }}
                >+</Button>
                </div>
            </HashRouter>

    );
}
