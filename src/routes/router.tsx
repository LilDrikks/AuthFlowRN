import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import { useAuth } from "../contexts/Auth";

export default function Router() {
  const { authData } = useAuth();
  return (
    <NavigationContainer>
      {true ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
