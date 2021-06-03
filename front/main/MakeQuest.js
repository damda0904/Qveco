import React from 'react'
import { Button, View, Text, } from 'react-native'

function sample({ navigation }) {
    return (
        
        <View>
            <Text>  퀘스트 카테고리 </Text>
            <Button title="식사"
                onPress={() => navigation.navigate("MakeQuestDetail")} />
            <Button title="레시피"
                onPress={() => navigation.navigate("MakeQuestDetail")} />
            <Button title="체험"
                onPress={() => navigation.navigate("MakeQuestDetail")} />
            <Button title="생활습관"
                onPress={() => navigation.navigate("MakeQuestDetail")} />
            <Button title="에픽 퀘스트 "
                onPress={() => navigation.navigate("MakeQuestDetail")} />
        </View>
    )
}

export default sample
