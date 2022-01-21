import React from "react";
import { Text } from "react-native";

export default function Item ({name, price, description}) {
    return (
        <>
            <Text>{name}</Text>
            <Text>{price}</Text>
            <Text>{description}</Text>
        </>
    )
}