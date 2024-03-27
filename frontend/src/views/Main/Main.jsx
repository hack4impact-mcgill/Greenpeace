import React, { useState, useEffect } from "react";
import { HashRouter, useHistory } from "react-router-dom";
import { Button } from "@mui/material";
import { PinDataProvider } from "../../context/PinDataContext";
import { Map } from "../../components/Map/Map";


export default function Main() {
  const [goToLogin, setGoToLogin] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (goToLogin) {
      history.push("/login");
    }
  }, [goToLogin, history]);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <HashRouter>
        <PinDataProvider>
          <div style={{ width: "100%", height: "100%" }}>
            <Map />
            <Button
              color="primary"
              variant="contained"
              className="loginButton"
              style={{
                zIndex: 1,
                position: "absolute",
                top: "4vh",
                right: "12vh",
              }}
              onClick={() => {
                setGoToLogin(true);
              }}
            >
              Sign In
            </Button>
          </div>
        </PinDataProvider>
      </HashRouter>
    </div>
  );
}
