import React, { createContext } from "react";

const PinContext = createContext({
    pins: [
        { 
            id: 0,
            coordinates: [ 45.5043, -73.5734 ],
            location: "McCord Museum",
            description: "This is a museum"
        },
        {
            id: 1,
            coordinates: [ 45.5043, -73.5769 ],
            location: "OAP",
            description: "Open air pub"
        }
    ],
    setPins: () => {},
});

export default PinContext;