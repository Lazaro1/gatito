import React from "react";
import { TextInput } from "react-native";
import stylesDefault from './styles'

export default function CampoInteiro({value, styles, action}) {
    const update = (novoValor, acaoRetorno) => {
        const verrifyInterger = novoValor.match(/^[0-9]*$/)

        if (!verrifyInterger) return

        const removeZero = novoValor.replace(/^(0)(.+)/,'$2')


        acaoRetorno(removeZero)
    }
    const numberToString = String(value)  

    return (
        <TextInput
            style={[stylesDefault.campo, styles]}
            keyboardType="number-pad"
            selectTextOnFocus
            onChangeText={(novoValor) => {update(novoValor, action)}}
            value={numberToString}
        />
    )
}