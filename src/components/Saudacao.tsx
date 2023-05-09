import React, { useState, useEffect } from "react";
import { TextInput, Text, View } from "react-native";
import Name from "./Name";
function Saudacao() {
  const [nome, setNome] = useState("");

  useEffect(() => {
    console.log("O componente foi montado.");

    return () => {
      console.log("O componente foi desmontado.");
    };
  }, []);

  useEffect(() => {
    console.log("O componente foi atualizado.");
  });

  return (
    <View className="bg-black gap-2 flex items-center justify-center p-5 m-5">
      <Name nome={nome}/>
      <TextInput
        className={`
          rounded-md border-0 p-1.5
        text-gray-900 shadow-sm ring-1
          ring-inset ring-gray-300 placeholder:text-gray-400
          focus:ring-2 focus:ring-inset
        focus:ring-indigo-600 text-sm leading-6 bg-white
      `}
        value={nome}
        onChangeText={(value) => setNome(value)}
      />
    </View>
  );
}

export default Saudacao;
