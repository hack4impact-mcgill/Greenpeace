import React from "react";
import { useEffect, useState, useContext } from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import InputBase from "@mui/material/InputBase";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PinCard from "./PinCard";
import { PinDataContext } from "./context/PinDataContext";


export default function ChangeLog() {
  const [state, setState] = React.useState({
    left: false,
  });
  const [pins, setPins] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const pinData = useContext(PinDataContext);

  useEffect(() => {
    if (pinData) {
      setPins(pinData.pins);
      setCategories(pinData.categories);
    }
  }, [pinData]);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, left: open });
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredPins = pins.filter(
    (pin) =>
      pin.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "" || pin.category === selectedCategory)
  );

  return (
    <div>
      <Button color="primary" variant="contained" onClick={toggleDrawer(true)}>
        Change Log
      </Button>
      <SwipeableDrawer
        anchor="left"
        open={state.left}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <div
          style={{
            width: 400,
          }}
        >
          <div
            style={{
              height: 75,
              backgroundColor: "#3E654A",
              padding: 0,
              display: "flex",
              alignItems: "center",
              paddingLeft: 20,
            }}
          >
            <Typography style={{ color: "white" }}>Change Log</Typography>
          </div>
          <div
            style={{
              width: "70%",
              margin: "20px 50px",
              display: "flex",
              alignItems: "center",
              padding: 10,
              boxShadow: "0 2px 30px rgba(0,0,0,0.1)",
            }}
          >
            <div
              style={{
                height: "100%",
                position: "absolute",
                right: "15%",
                pointerEvents: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search Change Log…"
              inputProps={{ "aria-label": "search" }}
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <FormControl
            variant="outlined"
            style={{
              width: "45%",
              margin: "20px 50px",
              display: "flex",
              boxShadow: "0 2px 30px rgba(0,0,0,0.1)",
            }}
          >
            <InputLabel id="category-select-label">Filter</InputLabel>
            <Select
              label="Filter"
              labelId="category-select-label"
              id="category-select"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              {/* Map over categories */}
              <MenuItem value="">All</MenuItem>
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {filteredPins.map((pin) => (
            <PinCard
              key={pin.id}
              date={pin.createdAt}
              name={pin.name}
              category={pin.category}
            />
          ))}
        </div>
      </SwipeableDrawer>
    </div>
  );
}
