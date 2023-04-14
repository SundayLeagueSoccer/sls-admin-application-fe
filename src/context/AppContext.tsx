import React, { createContext, useState } from "react";

type AppContextProviderProps = {
  children: React.ReactNode;
};

type AppContextType = {
  mobileSidebarOpen: boolean;
  setMobileSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AppContext = createContext({} as AppContextType);

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <AppContext.Provider
      value={{
        mobileSidebarOpen: mobileSidebarOpen,
        setMobileSidebarOpen: setMobileSidebarOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
