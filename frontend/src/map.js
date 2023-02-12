import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function Home() {
    return <div> HERE</div>
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBjmCT9aE4BKFvU5vDsz9lKs-864dpDpB0",
  });

   if (!isLoaded) return <div>Loading...</div>;
   return <div>map</div>
}

 function Map() {
  return <GoogleMap zoom={10} center={{lat: 44, lng: -88}} mapContainerClassName="map-container"></GoogleMap>

//   return (
//     <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
//       <Marker position={center} />
//     </GoogleMap>
//   );
}