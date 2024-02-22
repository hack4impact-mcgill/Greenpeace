import React from 'react';
import { useEffect, useState } from "react";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
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
  searchBar: {
    width: '70%',
    margin: '20px auto',
    display: 'flex',
    alignItems: 'center',
    padding: 10,
    boxShadow: '0 2px 30px rgba(0,0,0,0.1)'
  },
  searchIcon: {
    height: '100%',
    position: 'absolute',
    right: '15%',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function ChangeLog() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });
  const [pins, setPins] = React.useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Simulate fetching data
    const fetchData = async () => {
      // Simulated data fetch
      const pinsData = [
        { id: 1, date: "2024-01-01", name: "Grocery Store", category: "General Store"},
        { id: 2, date: "2024-01-02", name: "Mandy's", category: "Restaurant"},
        { id: 3, date: "2024-01-03", name: "Mont Royal", category: "Park"},
        { id: 4, date: "2024-01-01", name: "Snack Store", category: "General Store"},
        { id: 5, date: "2024-01-02", name: "Food Quarter", category: "Restaurant"},
        { id: 6, date: "2024-01-03", name: "Central Park", category: "Park"},
        // Add more data as needed
      ];
      setPins(pinsData);
    };

    fetchData();
  }, []);

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

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPins = pins.filter(pin =>
    pin.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
              Change Log
            </Typography>
          </div>
          <div className={classes.searchBar}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search Change Log…"
                inputProps={{ 'aria-label': 'search' }}
                onChange={handleSearchChange}
              />
          </div>
          {filteredPins.map((pin) => (
            <PinCard key={pin.id} date={pin.createdAt} name={pin.name} category={pin.category} />
          ))}
        </div>
      </SwipeableDrawer>
    </div>
  );
}