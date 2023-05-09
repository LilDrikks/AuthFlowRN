import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Saudacao from "../components/Saudacao";
import Account from "../components/Account";

export default function HomeScreen() {
  const navigation = useNavigation()
  return (
    <View className="h-full items-center">
      <Text className="text-lg text-center mt-4">
        Essa tela só pode ser vista por usuários autenticados
      </Text> 
      <View className=" items-center justify-center">
        <Saudacao />
        <Account />
        <TouchableOpacity onPress={() => navigation.navigate('Navigation')} className="bg-green-800 p-6 rounded-lg">
          <Text className="text-white">Configurações</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
