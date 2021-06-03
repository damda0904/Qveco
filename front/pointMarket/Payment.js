import React from 'react'
import { View, Text, Button } from 'react-native'

export default function Payment({ navigation }) {
    return (
        <View>
            <Text>보유 포인트 : 00점</Text>
            <Text>상품리스트1</Text>
            <Text>~~를 보유 포인트로 결제하시겠습니까?</Text>
            <Button title="네"
                onPress={() => navigation.navigate("PayResult")} />
            <Button title="아뇨! 다른거 볼게요"
                onPress={() => navigation.navigate("TabScreen")} />
        </View>
    )
}
