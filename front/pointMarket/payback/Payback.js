import React from 'react'
import { View, Text, Button } from 'react-native'

export default function PaybackResult({navigation}) {
    return (
        <View>
            <Text> 보유 포인트 : 00점</Text>
            <Text>환급하기</Text>
            <Text>00점에서 00점을</Text>
            <Text>~은행 ~으로 보냅니다</Text>
            <Button title="확인"
                onPress={() => navigation.navigate("TabScreen") }/>
            <Button title="취소"/>
        </View>
    )
}
