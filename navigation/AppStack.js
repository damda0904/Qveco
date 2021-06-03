import React, { Component, useEffect } from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { createStackNavigator } from '@react-navigation/stack';
import { View, TouchableOpacity, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const EmptyScreen = () => {
    return (null)
}

import MakeQuest from '../front/main/MakeQuest';
import MakeQuestDetail from '../front/main/MakeQuestDetail';
import Meal from '../front/main/Meal';
import QuestMain from '../front/main/QuestMain';

import PickCamera from '../front/feed/PickCamera';
import Feed from '../front/feed/Feed';

import MarketMain from '../front/pointMarket/MarketMain';
import DonateMain from '../front/pointMarket/donation/DonateMain';
import DonationResult from '../front/pointMarket/donation/DonationResult';
import CafeMain from '../front/pointMarket/cafe/CafeMain';
import PaybackMain from '../front/pointMarket/payback/PaybackMain';
import Payback from '../front/pointMarket/payback/Payback';
import Payment from '../front/pointMarket/Payment';
import PayResult from '../front/pointMarket/PayResult';

import MyFeed from '../front/myPage/MyFeed';
import Setting from '../front/myPage/Setting';
import Recipe from '../front/main/Recipe';


const HomeStack = ({ navigation }) => (
    <Stack.Navigator screenOptions={{
        headerShown: false}}>
        <Stack.Screen name="QuestMain" component={QuestMain}  />
        <Stack.Screen name="Meal" component={Meal}  />
        <Stack.Screen name="Recipe" component={Recipe}  />
        <Stack.Screen name="MakeQuestDetail" component={MakeQuestDetail} />
    </Stack.Navigator>
);

const FeedStack = ({ navigation }) => (
    <Stack.Navigator screenOptions={{
        headerShown: false}}>
        <Stack.Screen name="Feed" component={Feed}/>
    </Stack.Navigator>
);

//===========================================================Camera.js의 function 이름(Camera)에 문제 발생
// const CameraStack = ({ navigation }) => (
//     <Stack.Navigator>
//         <Stack.Screen name="Camera" component={Camera} navigation={navigation} />
//     </Stack.Navigator>
// );

const MarketStack = ({ navigation }) => (
    <Stack.Navigator screenOptions={{
        headerShown: false}}>
        <Stack.Screen name="MarketMain" component={MarketMain}  />
        <Stack.Screen name="CafeMain" component={CafeMain}  />
        <Stack.Screen name="DonateMain" component={DonateMain} />
        <Stack.Screen name="DonationResult" component={DonationResult} />
        <Stack.Screen name="PaybackMain" component={PaybackMain} />
        <Stack.Screen name="Payback" component={Payback}  />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="PayResult" component={PayResult}  />
    </Stack.Navigator>
);

const MyPageStack = ({ navigation }) => (
    <Stack.Navigator screenOptions={{
        headerShown: false}}>
        <Stack.Screen name="MyFeed" component={MyFeed}  />
        <Stack.Screen name="Setting" component={Setting} />
    </Stack.Navigator>
);

const AppStack = (props, { navigation }) => {
    useEffect(() => {
       //props.clearData();
       props.fetchUser();
       //props.fetchUserPosts();
       //props.fetchUserFollowing();
      }, [])
    return (
        <Tab.Navigator initialRouteName="Home" labeled={false}>
            <Tab.Screen name="Home" component={HomeStack}       //Home == Quest
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }} />
            <Tab.Screen name="Feed" component={FeedStack}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }} />
            <Tab.Screen name="PickCamera" component={EmptyScreen}
                listeners={({ navigation }) => ({
                        tabPress: event => {
                            event.preventDefault();
                            navigation.navigate("PickCamera")
                        }
                    })}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="plus-box" color={color} size={26} />
                        ),
            }} />
            <Tab.Screen name="Market" component={MarketStack}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }} />
            <Tab.Screen name="MyPage" component={MyPageStack}
             listeners={({ navigation }) => ({
                tabPress: event => {
                    event.preventDefault();
                    navigation.navigate("MyFeed")
                }})}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account-circle" color={color} size={26} />
                    ),
                }} />
        </Tab.Navigator>
    )
}

export default AppStack;
