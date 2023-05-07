import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import { useAuth } from '../contexts/Auth';

export default function Settings() {
  const {signOut} = useAuth()
    return (
      <View className="h-full items-center">
        <Text className="text-lg text-center mt-4">
          Configurações
        </Text>
        <View className="flex-1 items-center justify-center">
          <TouchableOpacity onPress={() => signOut()} className="bg-red-800 p-6 rounded-lg">
            <Text className="text-white">Sair</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }