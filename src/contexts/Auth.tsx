import React, { ReactNode, useContext } from "react";
import { createContext, useState } from "react";
import { authService } from "../services/authService";
import { Alert } from "react-native";

export interface AuthData {
  token: string;
  email: string;
  name: string;
}
interface AuthContextData {
  authData?: AuthData;
  signIn: (email: string, password: string) => Promise<AuthData>;
  signOut: () => Promise<void>;
}
export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

interface Props {
  children: ReactNode;
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [authData, setAuthData] = useState<AuthData>();

  async function signIn(email: string, password: string): Promise<AuthData> {
    try {
      const auth = await authService.signIn(email, password);

      setAuthData(auth);

      return auth;
    } catch (error) {
      Alert.alert(error.message, 'tente novamente')
    }
  }

  async function signOut(): Promise<void> {
    setAuthData(undefined);

    return;
  }

  return (
    <AuthContext.Provider value={{ authData, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
