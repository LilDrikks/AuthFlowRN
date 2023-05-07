import React from 'react'
import { Text, View } from 'react-native'
import LoginBox from '../components/LoginBox'

function LoginScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-blue-500">
        <LoginBox />
    </View>
  )
}

export default LoginScreen