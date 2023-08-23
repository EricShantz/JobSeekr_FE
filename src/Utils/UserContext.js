import React, { createContext, useState, useContext } from 'react';

// Create the context
const UserContext = createContext();

// Create a provider component
export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ 
        user, 
        setUser
         }}>

      {children}
      
    </UserContext.Provider>
  );
}

// Custom hook to use the user context
export function useUserContext() {
  return useContext(UserContext);
}
