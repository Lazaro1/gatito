import React from "react";
import { TouchableOpacity, Text } from "react-native";
import functionStyles from './styles'

export default function Button({small = false, inverted = false, value, action, styles}) {
    const stylesDefault = functionStyles(small, inverted)
    return (
        <TouchableOpacity onPress={action} style={[stylesDefault.botao, styles]}>
            <Text style={stylesDefault.valor}>{value}</Text>
        </TouchableOpacity>
    )
}