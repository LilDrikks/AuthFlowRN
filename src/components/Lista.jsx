import React, { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

function Lista() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBoxChange = (value) => {
    setIsChecked(value);
  };

  const [lista, setLista] = useState([]);
  const [novoItem, setNovoItem] = useState("");

  function setItem() {
    if (!novoItem) return;
    setLista([...lista, { title: novoItem, checked: false }]);
    setNovoItem("");
  }
  function getItem(value) {
    setNovoItem(value);
  }
  function setCheckedTrue(index) {
    let novaLista = lista;
    const item = novaLista.find((value, i) => (index === i ? true : ""));
    item.checked = !item.checked;
    novaLista[index] = item;
    setLista(novaLista);
  }

  return (
    <View className="w-full h-full justify-center">
      <View className="flex flex-col bg-slate-300 flex-1 justify-between pt-10">
        <View className="gap-2">
          <Text className="text-[32px] text-center">Lista</Text>
          {lista?.map((i, index) => (
            <View
              nativeID={i.title}
              key={index}
              className="flex flex-row items-center justify-between bg-white py-2"
            >
              <Text className="pl-4">{i.title}</Text>
              <BouncyCheckbox
                isChecked={i.checked}
                onPress={() => setCheckedTrue(index)}
              />
            </View>
          ))}
        </View>
        <View className="gap-4 px-2 pb-4">
          <TextInput
            className="bg-blue-400 pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-6"
            placeholder="Nova tarefa..."
            autoFocus={true}
            value={novoItem}
            onChangeText={(value) => getItem(value)}
            onSubmitEditing={setItem}
          />

          <TouchableOpacity
            className="bg-purple-950 py-2 px-10 rounded-md"
            onPress={() => setItem()}
          >
            <Text className="text-white text-center">ADD</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Lista;
