import React, { useState } from "react";
import { View , Text, TextInput, Button } from "react-native";
import CampoInteiro from "../../components/CampoInteiro/index.js";
import styles from "./styles.js";
import Styles from './styles.js'

export default function Item ({name, price, description}) {
    const [quantities, setQuantities] = useState(1)

    return (
        <>
            <View style={Styles.informacao}>
                <Text style={Styles.nome}>{name}</Text>
                <Text style={Styles.descricao}>{description}</Text>
                <Text style={Styles.preco}>{price}</Text>
            </View>
            <View style={Styles.carrinho}>
                <View>
                    <View style={Styles.valor}>
                        <Text style={Styles.descricao}>Quantidade: </Text>
                        <CampoInteiro value={quantities} action={setQuantities}/>
                    </View>
                    <View style={Styles.valor}>
                        <Text style={Styles.descricao}>Quantidade: </Text>
                        <Text style={Styles.preco}>0</Text>
                    </View>
                </View>
                <Button title="Adicionar"/>
            </View>
            <View style={Styles.divisor} />
        </>
    )
}