import React from 'react'
import { View, Text, Button } from 'react-native'

export default function Payment({ navigation }) {
    return (
        <View>
            <Text> 보유 포인트 : 00점</Text>
            <Text>기타</Text>
            <Button title="환급하기"
                onPress={() => navigation.navigate("Payback")} />
            <Button title="문화상품권" />
            <Button title="농산물" />
            <Button title="책, 영화" />
            <Button title="문화생활" />
        </View>
    )
}
