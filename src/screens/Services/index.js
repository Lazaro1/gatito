import React from 'react';
import { View, Text, SafeAreaView, StatusBar } from 'react-native';

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
    <SafeAreaView style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <StatusBar />
      <Text>Tela de Serviços</Text>
    </SafeAreaView>
  );
}
