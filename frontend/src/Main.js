import React, { useState } from "react";
import { HashRouter } from "react-router-dom";
import { Button } from "@material-ui/core"

import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    InfoWindow,
} from "react-google-maps";
import mapStyles from './mapStyles';
import FormModal from './FormModal';

function Map() {
    const [selectedPin, setSelectedPin] = useState(null);
    const [pins, setPins] = useState([]);
    const [isListening, setIsListening] = useState(false);

    const createPin = (pinInfo) => {
        setPins([...pins, {
            id: pins.length,
            coordinates: pinInfo.coordinates,
            name: pinInfo.name,
            address: pinInfo.address,
            category: pinInfo.category,
            description: pinInfo.description,
            review: pinInfo.review,
        }])
    }

    const handlePublishPin = (pinToPublish, pinInfo) => {
        pinToPublish.name = pinInfo.name;
        pinToPublish.address = pinInfo.address;
        pinToPublish.category = pinInfo.category;
        pinToPublish.description = pinInfo.description;
        pinToPublish.review = pinInfo.review;
        setSelectedPin(pinToPublish);
    }

    return (
        <GoogleMap
            defaultZoom={19}
            defaultCenter={{ lat: 45.5048, lng: -73.5772 }}
            options={{ styles: mapStyles }}
            onClick={(event) => {
                if (isListening) {
                    const pinInfo = {
                        coordinates: [event.latLng.lat(), event.latLng.lng()],
                        name: "New Pin Name",
                        address: "New Address",
                        category: "New Category",
                        description: "New Description",
                        review: "New Review",
                    };
                    createPin(pinInfo);
                    setIsListening(false);
                }
            }
            }
        >
            {pins.map(pin => (
                <Marker
                    key={pin.id}
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
                    <div style={{ width: "300px", height: "200px", padding: "20px" }}>
                        <h2>{selectedPin.name}</h2>
                        <p>{selectedPin.address}</p>
                        <p>{selectedPin.category}</p>
                        <p>{selectedPin.description}</p>
                        <p>{selectedPin.review}</p>
                        <FormModal
                         pinToPublish={selectedPin}
                         handlePublishPin={handlePublishPin}
                         />
                    </div>
                </InfoWindow>
            )}
            <Button
                color="primary"
                variant="contained"
                style={{
                    zIndex: 1,
                    marginTop: "-10vh",
                    position: "absolute",
                    right: "12vh",
                    height: "65px",
                    width: "50px",
                    fontSize: "60px",
                    borderRadius: "50px",
                    fontWeight: "300"
                }}
                onClick={() => {
                    setIsListening(true);
                }}

            >+</Button>
            {/* <FormModal /> */}
        </GoogleMap>
    );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));
const API_KEY = process.env.REACT_APP_API_KEY;

export default function Main() {

    return (
        <HashRouter>
            <div style={{ width: "97vw", height: "100vh" }}>

                <MapWrapped
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places}`}
                    loadingElement={<div style={{ height: `95%` }} />}
                    containerElement={<div style={{ height: `95%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    style={{ zIndex: -1 }}
                />
            </div>
        </HashRouter>
    );
}
