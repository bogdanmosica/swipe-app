'use client';
import axios from 'axios';
import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react';
import { SWIPE_BACKEND_URL } from '../lib/utils';
import { useRouter } from 'next/navigation';

type MainStoreContextProviderProps = {
  children: React.ReactNode;
};

export type UserState = {
  email: string;
  name?: string;
  photo?: string;
};

export type MainStoreContextType = {
  user: UserState;
  setUser: Dispatch<SetStateAction<UserState>>;
  isUserAuthenticated: boolean;
  setIsUserAuthenticated: Dispatch<SetStateAction<boolean>>;
  isCheckingUserAuth: boolean;
  setIsCheckingUserAuth: Dispatch<SetStateAction<boolean>>;
};

export const MainStoreContext = createContext<MainStoreContextType | null>(
  null
);

export default function MainStoreContextProvider({
  children,
}: MainStoreContextProviderProps) {
  const router = useRouter();
  const [user, setUser] = useState<UserState>({
    email: '',
    name: '',
    photo: '',
  });
  const [isUserAuthenticated, setIsUserAuthenticated] =
    useState<boolean>(false);
  const [isCheckingUserAuth, setIsCheckingUserAuth] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get<UserState>(`${SWIPE_BACKEND_URL}/auth/me`, { withCredentials: true })
      .then((response) => {
        setUser({ ...response.data });
        setIsUserAuthenticated(true);
        setIsCheckingUserAuth(false);
        return response;
      })
      .catch((error) => {
        setIsCheckingUserAuth(false);
        console.error(error);
      });
  }, []);

  return (
    <MainStoreContext.Provider
      value={{
        user,
        setUser,
        isUserAuthenticated,
        setIsUserAuthenticated,
        isCheckingUserAuth,
        setIsCheckingUserAuth,
      }}
    >
      {children}
    </MainStoreContext.Provider>
  );
}
