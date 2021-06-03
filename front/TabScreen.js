import React from 'react'
import { View, Text, Button } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


import QuestMain from './main/QuestMain';
import {storeUser} from '../backend/User';


const Tab = createMaterialBottomTabNavigator();

export default function TabScreen() {
    useEffect(() => {
        
    })
    return (
        <Tab.Navigator initialRouteName="QuestMain" labeled={true}>
            <Tab.Screen name="QuestMain" component={QuestMain}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                    
                }} />

                
        </Tab.Navigator>
    )
}
