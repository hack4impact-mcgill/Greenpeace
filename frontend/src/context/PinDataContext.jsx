import React, { createContext } from 'react';

// Sample data
const pinData = [
  { id: 1, createdAt: "2024-01-01", name: "Grocery Store", category: "General Store" },
  { id: 2, createdAt: "2024-01-02", name: "Mandy's", category: "Restaurant" },
  { id: 3, createdAt: "2024-01-03", name: "Mont Royal", category: "Park" },
  { id: 4, createdAt: "2024-01-01", name: "Snack Store", category: "General Store" },
  { id: 5, createdAt: "2024-01-02", name: "Food Quarter", category: "Restaurant" },
  { id: 6, createdAt: "2024-01-03", name: "Central Park", category: "Park" },
];

// Create the context
export const PinDataContext = createContext();

// Create a provider component
export const PinDataProvider = ({ children }) => {
  // Value to be provided by the context
  const contextValue = {
    pins: pinData,
    categories: [...new Set(pinData.map(pin => pin.category))] // Extract unique categories
  };

  // Provide the context value to its children
  return (
    <PinDataContext.Provider value={contextValue}>
      {children}
    </PinDataContext.Provider>
  );
};
