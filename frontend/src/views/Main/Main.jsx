import React, { useState, useEffect } from "react";
import { HashRouter, useHistory } from "react-router-dom";
import { Button } from "@mui/material";
import { PinDataProvider } from "../../context/PinDataContext";
import { Map } from "../../components/Map/Map";

export default function Main() {
    const [isListening, setIsListening] = useState(false);
    const [mapOpacity, setMapOpacity] = useState(1)
    const [goToLogin, setGoToLogin] = useState(false);
    const history = useHistory();

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

    useEffect(() => {
        if (goToLogin) {
          history.push('/login');
        }
      }, [goToLogin, history]);


    const handleCreatePin = (event) => {
        console.log(event)
    }

    return (
        <HashRouter>
            <PinDataProvider>
                <div style={{ width: "97vw", height: "100vh", opacity: mapOpacity }}>
                    <Map />
                    <Button
                        color="primary"
                        variant="contained"
                        className="loginButton"
                        style={{
                            zIndex: 1,
                            position: "absolute",
                            top: "4vh",
                            right: "12vh"
                        }}
                        onClick={() => {
                            setGoToLogin(true);
                        }}
                    >Sign In</Button>
                    <Button
                        color="primary"
                        variant="contained"
                        className="addPinButton"
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
            </PinDataProvider>
        </HashRouter>
    );
}
