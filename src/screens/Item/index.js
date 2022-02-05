import React, { useState } from "react";
import { View , Text, TouchableOpacity } from "react-native";
import CampoInteiro from "../../components/CampoInteiro/index.js";
import Button from '../../components/Button'
import Styles from './styles.js'

export default function Item ({name, price, description}) {
    const [quantities, setQuantities] = useState(1)
    const [total, setTotal] = useState(price)
    const [expand, setExpand] = useState(false)

    const updateValueAndTotal = (newValue) => {
        setQuantities(newValue)
        calculatedTotal(newValue)
    }

    const calculatedTotal = (value) => {
        setTotal(value * price)
    }

    const invertedExpend = () => { 
        setExpand(!expand)
        updateValueAndTotal(1)
    }

    return (
        <>
            <TouchableOpacity style={Styles.informacao} onPress={invertedExpend}>
                <Text style={Styles.nome}>{name}</Text>
                <Text style={Styles.descricao}>{description}</Text>
                <Text style={Styles.preco}>
                    {Intl.NumberFormat('pt-BR', {
                        style: 'currency', currency: 'BRL'
                    }).format(price)}
                </Text>
            </TouchableOpacity>
            {expand && (
                <View style={Styles.carrinho}>
                    <View>
                        <View style={Styles.valor}>
                            <Text style={Styles.descricao}>Quantidade: </Text>
                            <CampoInteiro styles={Styles.quantidade} value={quantities} action={updateValueAndTotal}/>
                        </View>
                        <View style={Styles.valor}>
                            <Text style={Styles.descricao}>Total: </Text>
                            <Text style={Styles.preco}>
                                {Intl.NumberFormat('pt-BR', {
                                    style: 'currency', currency: 'BRL'
                                }).format(total)}
                            </Text>
                        </View>
                    </View>
                    <Button value="Adicionar ao Carrinho" action={() => {}}/>
                </View>
            )}
            <View style={Styles.divisor} />
        </>
    )
}