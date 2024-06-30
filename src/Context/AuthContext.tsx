import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { getLocalItem } from '../Utils/Helpers';
import LOCAL_STORAGE_KEYS from '../Utils/LocalKeys';

export interface IUser {
  id: string;
  name: string;
  email: string;
}

type UserType = 'VENDOR' | 'RFQ';

export interface AuthContextType {
  user: IUser | null;
  setUser: Dispatch<SetStateAction<IUser | null>>;
  isAuthenticated: boolean;
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
  userType: UserType | null;
  setUserType: Dispatch<SetStateAction<UserType | null>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(
    getLocalItem(LOCAL_STORAGE_KEYS.USER) || null
  );
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    getLocalItem(LOCAL_STORAGE_KEYS.IS_AUTHENTICATED) || false
  );
  const [userType, setUserType] = useState<UserType | null>(
    getLocalItem(LOCAL_STORAGE_KEYS.USER_TYPE) || null
  );

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated,
        setIsAuthenticated,
        userType,
        setUserType,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
