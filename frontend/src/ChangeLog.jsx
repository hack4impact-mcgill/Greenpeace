import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import PinCard from './PinCard';


const useStyles = makeStyles({
  drawer: {
    width: 400
  },
  header: {
    height: 75,
    backgroundColor: '#3E654A',
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 20
  },

});

export default function ChangeLog() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });
  const [pins, setPins] = React.useState([]);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, left: open });
    setTimeout(() => {
      // Assuming 'pinsData' is fetched from an API or somewhere else
      const pinsData = [
        { id: 1, createdAt: "2024-01-01", name: "Pin 1" },
        { id: 2, createdAt: "2024-01-02", name: "Pin 2" },
        { id: 3, createdAt: "2024-01-03", name: "Pin 3" }
        // Add more pin data as needed
      ];
      setPins(pinsData);
    }, 1000);
  };

  return (
    <div>
      <Button color="primary" variant="contained" onClick={toggleDrawer(true)}>Change Log</Button>
      <SwipeableDrawer
        anchor="left"
        open={state.left}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <div className={classes.drawer}>
          <div className={classes.header}>
            <Typography style={{ color: "white" }}>
              Change Log            </Typography>
          </div>
          {pins.map((pin) => (
            <PinCard key={pin.id} date={pin.createdAt} name={pin.name} />
          ))}
        </div>
      </SwipeableDrawer>
    </div>
  );
}