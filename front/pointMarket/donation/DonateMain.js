import React, { useState, useEffect } from 'react'
import { View, Text, Button, TextInput, Picker } from 'react-native'

export default function DonateMain({ navigation }) {
    const [amount, setAmount] = useState(0);
    const [item, setItem] = useState("sample1");

    // useEffect(() => {
    //     setAmount(money);
    // }, [])

    return (
        <View>
            <Text>보유 포인트 : 000점</Text>
            <Picker
                selectedValue={item}
                style={{ height: 50, width: 150 }}
                onValueChange={itemValue => setItem(itemValue)}
            >
                <Picker.Item label="sample1" value="sample1" />
                <Picker.Item label="sample2" value="sample2" />
            </Picker>
            <Text>에</Text>
            <TextInput
                onChangeText={text => setAmount(text)} />
            <Text>원 기부합니다.</Text>
            <Button title="기부하기"
                onPress={() => {
                    console.log(item, amount)
                    navigation.navigate("DonationResult",
                    {
                        amount: amount,
                        destination : item
                    })}} />
            <Text>History</Text>
            <Text>__님이 ~~에 00원을 기부했습니다.</Text>
        </View>
    )
}
