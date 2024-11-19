import React, { createContext, useState } from "react";

// Create the Context
export const UpdateContext = createContext();

// Create the Context Provider component
export const UpdateProvider = ({ children }) => {
  const [isEdited, setIsEdited] = useState(false); // This is the shared state

  // Functions to update the count
  const putFalse = () => setIsEdited(false);
  const putTrue = () => setIsEdited(true);

  return (
    <UpdateContext.Provider value={{ isEdited, putFalse, putTrue }}>
      {children}
    </UpdateContext.Provider>
  );
};
