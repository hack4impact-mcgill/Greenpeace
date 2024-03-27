import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import ChangeLog from "../ChangeLog/ChangeLog";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useJsApiLoader,
} from "@react-google-maps/api";
import mapStyles from "./mapStyles";
import FormModal from "../../components/FormModel";

const API_KEY = process.env.REACT_APP_API_KEY;

export function Map() {
  const [selectedPin, setSelectedPin] = useState(null);
  const [refreshPin, setRefreshPin] = useState(null);
  const [pins, setPins] = useState([]);
  const [isListening, setIsListening] = useState(false);
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
    libraries: ["places", "geometry", "drawing"],
    version: "3.exp",
  });

  const createPin = (pinInfo) => {
    setPins([
      ...pins,
      {
        id: pins.length,
        coordinates: pinInfo.coordinates,
        name: pinInfo.name,
        address: pinInfo.address,
        category: pinInfo.category,
        description: pinInfo.description,
        review: pinInfo.review,
      },
    ]);
  };

  const handlePublishPin = (pinToPublish, pinInfo) => {
    pinToPublish.name = pinInfo.name;
    pinToPublish.address = pinInfo.address;
    pinToPublish.category = pinInfo.category;
    pinToPublish.description = pinInfo.description;
    pinToPublish.review = pinInfo.review;
    setSelectedPin(pinToPublish);
  };

  const resetSelectedPin = (selectedPin) => {
    setRefreshPin(selectedPin);
    setSelectedPin(null);
    setSelectedPin(refreshPin);
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
          <div style={{ width: "300px", height: "200px", padding: "20px" }}>
            <h2>{selectedPin.name}</h2>
            <p>{selectedPin.address}</p>
            <p>{selectedPin.category}</p>
            <p>{selectedPin.description}</p>
            <p>{selectedPin.review}</p>
            <FormModal
              pinToPublish={selectedPin}
              handlePublishPin={handlePublishPin}
              resetSelectedPin={resetSelectedPin}
            />
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
          marginTop: "-10vh",
          position: "absolute",
          right: "12vh",
          height: "65px",
          width: "50px",
          fontSize: "60px",
          borderRadius: "50px",
          fontWeight: "300",
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
