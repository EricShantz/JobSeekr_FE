import React, { createContext, useState, useContext } from 'react';

// Create the context
const UserContext = createContext();

// Create a provider component
export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [applicationList, setApplicationList] = useState(["Hey","Hi","Hello","How are you"])

  return (
    <UserContext.Provider value={{ 
        user, setUser,
        applicationList, setApplicationList,
         }}>

      {children}
      
    </UserContext.Provider>
  );
}

// Custom hook to use the user context
export function useUserContext() {
  return useContext(UserContext);
}
