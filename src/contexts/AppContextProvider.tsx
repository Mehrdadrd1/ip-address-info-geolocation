import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import { AppContextProps } from "../Types";

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [phoneNumber, setPhoneNumber] = useState<number>(0);

  return (
    <AppContext.Provider value={{ phoneNumber, setPhoneNumber }}>
      {children}
    </AppContext.Provider>
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
