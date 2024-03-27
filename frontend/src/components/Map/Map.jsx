import React, { useState } from "react";
import { Box, Link, Button } from "@mui/material";
import ChangeLog from "../ChangeLog/ChangeLog";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useJsApiLoader,
} from "@react-google-maps/api";
import mapStyles from "./mapStyles";

const API_KEY = process.env.REACT_APP_API_KEY;

export function Map() {
  const [selectedPin, setSelectedPin] = useState(null);
  const [pins, setPins] = useState([]);
  const [isListening, setIsListening] = useState(false);
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
    libraries: ["places", "geometry", "drawing"],
    version: "3.exp",
  });

  const createPin = (coordinates, name, description) => {
    setPins([
      ...pins,
      {
        id: pins.length,
        coordinates: coordinates,
        location: name,
        description: description,
      },
    ]);
  };

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds({
      lat: 45.5048,
      lng: -73.5772,
    });
    map.fitBounds(bounds);
  }, []);

  if (loadError) return <h1>{loadError}</h1>;
  if (!isLoaded) return <h1>Loading</h1>;

  return (
    <GoogleMap
      zoom={19}
      options={{ styles: mapStyles }} // TODO: not working
      onLoad={onLoad}
      onClick={(event) => {
        if (isListening) {
          createPin(
            [event.latLng.lat(), event.latLng.lng()],
            "New Pin",
            "New Description"
          );
          setIsListening(false);
        }
      }}
      mapContainerStyle={{ height: "100%", width: "100%" }}
    >
      {pins.map((pin) => (
        <Marker
          key={pin.id}
          position={{
            lat: pin.coordinates[0],
            lng: pin.coordinates[1],
          }}
          onClick={() => {
            setSelectedPin(pin);
          }}
          icon={{
            scaledSize: new window.google.maps.Size(70, 70),
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
            lng: selectedPin.coordinates[1],
          }}
          justify="center"
        >
          <div>
            <h2>{selectedPin.location}</h2>
            <p>{selectedPin.description}</p>
            <Link component="button" variant="body2" onClick={() => {}}>
              Expand
            </Link>
          </div>
        </InfoWindow>
      )}

      <Box
        style={{
          position: "absolute",
          bottom: "30px",
          left: "30px",
          zIndex: 1,
        }}
      >
        <ChangeLog />
      </Box>

      <Button
        color="primary"
        variant="contained"
        style={{
          zIndex: 1,
          position: "absolute",
          height: "65px",
          width: "50px",
          fontSize: "60px",
          borderRadius: "50px",
          fontWeight: "300",
          top: "100%",
          right: "30px",
        }}
        onClick={() => {
          setIsListening(true);
        }}
      >
        +
      </Button>
    </GoogleMap>
  );
}
