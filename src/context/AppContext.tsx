import React, { createContext, useState } from "react";
import { playerIdType, playerStatLine } from "../Types";

type AppContextProviderProps = {
  children: React.ReactNode;
};

type AppContextType = {
  statsCategory: string;
  setStatsCategory: React.Dispatch<React.SetStateAction<string>>;
  allPlayers: playerIdType[];
  setAllPlayers: React.Dispatch<React.SetStateAction<playerIdType[]>>;
  playersToDisplay: playerIdType[];
  setAllPlayersToDisplay: React.Dispatch<React.SetStateAction<playerIdType[]>>;
  currentSelectedPlayer: playerIdType | undefined;
  setCurrentSelectedPlayer: React.Dispatch<
    React.SetStateAction<playerIdType | undefined>
  >;
  playersStatsList: playerStatLine[];
  setPlayersStatsList: React.Dispatch<React.SetStateAction<playerStatLine[]>>;
};

export const AppContext = createContext({} as AppContextType);

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [statsCategory, setStatsCategory] = useState("");
  const [allPlayers, setAllPlayers] = useState<playerIdType[]>([]);
  const [playersToDisplay, setAllPlayersToDisplay] = useState<playerIdType[]>(
    []
  );
  const [currentSelectedPlayer, setCurrentSelectedPlayer] =
    useState<playerIdType>();
  const [playersStatsList, setPlayersStatsList] = useState<playerStatLine[]>(
    []
  );

  return (
    <AppContext.Provider
      value={{
        statsCategory,
        setStatsCategory,
        allPlayers,
        setAllPlayers,
        playersToDisplay,
        setAllPlayersToDisplay,
        currentSelectedPlayer,
        setCurrentSelectedPlayer,
        playersStatsList,
        setPlayersStatsList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
