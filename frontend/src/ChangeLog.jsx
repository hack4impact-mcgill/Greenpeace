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

  // changeLogTitle: {
  //   color: '#ffffff', // Set color to white
  //   fontFamily: 'Roboto', // Set font family to Roboto
  //   fontSize: '1.5rem', // Adjust font size as needed
  //   fontWeight: 400, // Adjust font weight as needed
  //   margin: 0, // Remove default margin
  // },

});

export default function ChangeLog() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, left: open });
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
        </div>
      </SwipeableDrawer>
    </div>
  );
}