import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

function Account() {
  const [account, setAccount] = useState(0)
  return (
    <View className='mb-5 p-5 w-full flex items-center bg-blue-500'>
      <Text className='text-xl m-5'>{account}</Text>
      <TouchableOpacity 
        className='bg-zinc-500 w-full py-2 px-10 rounded-xl border border-white'
        onPress={() => setAccount(account + 1)}
      >
        <Text>
          +1
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Account