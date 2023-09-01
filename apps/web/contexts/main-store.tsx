import { Dispatch, SetStateAction, createContext, useState } from 'react';

type MainStoreContextProviderProps = {
  children: React.ReactNode;
};

export type EmailState = string | null;

export type MainStoreContextType = {
  userEmail: EmailState;
  setUserEmail: Dispatch<SetStateAction<EmailState>>;
};

export const MainStoreContext = createContext<MainStoreContextType | null>(
  null
);

export default function MainStoreContextProvider({
  children,
}: MainStoreContextProviderProps) {
  const [userEmail, setUserEmail] = useState<EmailState>(null);

  return (
    <MainStoreContext.Provider value={{ userEmail, setUserEmail }}>
      {children}
    </MainStoreContext.Provider>
  );
}
