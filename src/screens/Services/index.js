import React from 'react';
import { View, Text, SafeAreaView, StatusBar, FlatList } from 'react-native';
import Item from '../Item'

const servicos = [
  {
    id: 1,
    name: "Banho",
    price: 80,
    description: 'BANHO NO DOGUINHO É FREE'
  },
  {
    id: 2,
    name: "vACINA",
    price: 100,
    description: 'SEI GATO PRECISA TOMAR VACINA'
  },
  {
    id: 3,
    name: "Vacina Anti Rabica",
    price: 150,
    description: 'Uma dose da vacina anti rabica'
  }
]

export default function Services() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Text>Tela de Serviços</Text>
      <FlatList 
        data={servicos}
        keyExtractor={(id) => String(id)}
        renderItem={({item}) => <Item {...item} />}
      />
    </SafeAreaView>
  );
}
