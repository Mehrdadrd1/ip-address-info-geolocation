import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import { AppContextProps } from "../Types";
import { useMemo } from "react";

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [phoneNumber, setPhoneNumber] = useState<number>(0);

  const contextValue = useMemo(
    () => ({
      phoneNumber,
      setPhoneNumber,
    }),
    [phoneNumber]
  );

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("some thing wrong happend!!!");
  }
  return context;
};
