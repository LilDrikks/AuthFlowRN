import React from 'react'
import { Text, View } from 'react-native'

function Name({nome})  {
  return (
    <View>
      <Text className="text-white">Olá, {nome}!</Text>
      <Text className="text-white">Digite seu nome:</Text>
    </View>
  )
}

export default Name