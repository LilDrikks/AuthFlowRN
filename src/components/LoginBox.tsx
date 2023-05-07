import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useAuth } from "../contexts/Auth";

export default function LoginBox() {
  const {signIn} = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View className="w-4/5 justify-center px-6 pb-12 bg-white rounded-xl">
      <View className="mx-auto w-full max-w-sm">
        <Image
          className="mx-auto h-10 w-10 mt-8"
          source={{
            uri: "https://cdn.logo.com/hotlink-ok/logo-social-sq.png",
          }}
        />
        <Text className="mt-10 text-center text-2xl font-bold leading-9 text-gray-900">
          Sign in to your account
        </Text>
      </View>

      <View className="mt-10 mx-auto w-full max-w-sm">
        <View className="space-y-6">
          <View>
            <Text className="text-sm font-medium leading-6 text-gray-900">
              Email address
            </Text>
            <View className="mt-2">
              <TextInput
                className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-6"
                placeholder="digite seu email"
                autoComplete="email"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoFocus={true}
                secureTextEntry
                value={email}
                onChangeText={setEmail}
              />
            </View>
          </View>

          <View>
            <View className="flex flex-row items-center justify-between w-full">
              <Text className="text-sm font-medium leading-6 text-gray-900">
                Senha
              </Text>
              <View className="text-sm">
                <TouchableOpacity>
                  <Text className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Esqueceu a senha?
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View className="mt-2">
              <TextInput
                className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-6"
                placeholder="Enter your password"
                autoComplete="password"
                textContentType="password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                
              />
            </View>
          </View>

          <View>
            <TouchableOpacity
              className="flex justify-center rounded-md bg-indigo-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500"
              onPress={() => signIn(email, password)}
            >
              <Text className="text-white">Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex flex-row items-center justify-center mt-8 h-10">
          <Text className="text-center text-sm text-gray-500">
            Not a member?{" "}
          </Text>
          <TouchableOpacity>
              <Text className="font-semibold text-indigo-600 hover:text-indigo-500 pl-1">
                Start a 14 day free trial
              </Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
