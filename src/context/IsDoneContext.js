import React, { createContext, useContext, useState } from "react";

const IsDoneContext = createContext();

export function IsDoneProvider({ children }) {
  const [isDone, setIsDone] = useState(false);

  return (
    <IsDoneContext.Provider value={{ isDone, setIsDone }}>
      {children}
    </IsDoneContext.Provider>
  );
}

export function useIsDone() {
  return useContext(IsDoneContext);
}
