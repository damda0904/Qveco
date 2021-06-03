import React from 'react'
import { View, Text, Button } from 'react-native'

export default function CafeMain({ navigation }) {
    return (
        <View>
            <Text>보유 포인트 : 00점</Text>
            <Text>Best Item</Text>
            <Text>이미지1 이미지2</Text>
            <Text>Brand1 Brand2</Text>
            <Text>스타벅스</Text>
            <Button title="상품리스트1"
                onPress={() => navigation.navigate("Payment")} />
            <Button title="상품리스트2"
                onPress={() => navigation.navigate("Payment")} />
        </View>
    )
}
