import React, { useState, useEffect } from 'react'
import { View, Text, Button } from 'react-native'

export default function DonationResult({ route, navigation }) {
    const [destination, setDestination] = useState("");
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        if (destination === "") {
            setDestination(route.params.destination)
            setAmount(route.params.amount)
        }
    }
        
        
    )

    return (
        <View>
            <Text>보유포인트 : 00점</Text>
            <Text>{destination}에 {amount}원을 기부했습니다!</Text>
            <Text>ㅁㅁ님의 기부로 지구가 더욱 깨끗해졌어요</Text>
            <Text>~~점에서 {amount}점 차감되어 현재 ㅁㅁ님의 보유 포인트는 00점입니다</Text>
            <Button title="임시 : 돌아가기가 있어야 할까?"
                onPress={() => navigation.navigate("QuestMain")} />
        </View>
    )
}
