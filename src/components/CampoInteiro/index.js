import React from "react";
import { TextInput } from "react-native";

export default function CampoInteiro({value, action}) {
    const numberToString = String(value)

    return (
        <TextInput 
            keyboardType="number-pad"
            selectTextOnFocus
            onChangeText={(novoValor) => {action(novoValor)}}
            value={numberToString}
        />
    )
}