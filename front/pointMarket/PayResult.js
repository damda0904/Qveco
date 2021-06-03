import React from 'react'
import { View, Text, Button } from 'react-native'

export default function Payment({navigation}) {
    return (
        <View>
            <Text>보유 포인트 : 00점</Text>
            <Text>상품리스트1</Text>
            <Text>00점에서 00점이 차감되어 00점이 남았습니다!</Text>
            <Text>맛있는 시간 되세요!</Text>
            <Button title="네"
                onPress={() => navigation.navigate("TabScreen")} />
        </View>
    )
}
