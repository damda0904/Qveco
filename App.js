import React, { Component } from 'react'

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import * as Font from 'expo-font';

import firebase from 'firebase';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './redux/reducers'
import thunk from 'redux-thunk'
const store = createStore(rootReducer, applyMiddleware(thunk))

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDsY5CW6nrBkSGIr6yoqyZfUAc0LjCzNt4",
    authDomain: "vegetarian-ff82a.firebaseapp.com",
    projectId: "vegetarian-ff82a",
    storageBucket: "vegetarian-ff82a.appspot.com",
    messagingSenderId: "586646681228",
    appId: "1:586646681228:web:8c296107beaecee1b1ada9",
    measurementId: "G-WDR3T8FJ3D"
};

if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig)
}

import SignUp from "./front/landing/SignUp";
import SignIn from "./front/landing/SignIn";
import Tutorial from "./front/landing/Tutorial";
import AppStack from './navigation/AppStack';
import CameraScreen from './front/feed/PickCamera';

import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import ChooseChar from './front/landing/ChooseChar';
import CharDetail from './front/landing/CharDetail';
import QuestMain from './front/main/QuestMain'
import TabScreen from './front/TabScreen';
import LandingPage from './front/landing/LandingPage';
import Recipe from './front/main/Recipe';
import Meal from './front/main/Meal';
import Habit from './front/main/Habit';
import Experience from './front/main/Experience';
import Epic from './front/main/Epic';
import QuestDetail from './front/main/QuestDetail';
import Participate from './front/main/Participate';
import MakeQuestDetail from './front/main/MakeQuestDetail';


const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent",
    },
};

const Stack = createStackNavigator();

export class App extends Component {
    constructor(props) {
        super()
        this.state = {
          loaded: false,
        }
      }
      async loadFonts() {
        await Font.loadAsync({
          "Roboto-Black" : require('./assets/fonts/Roboto-Black.ttf'),
            "Roboto-Bold" : require('./assets/fonts/Roboto-Bold.ttf'),
            "Roboto-Regular" : require('./assets/fonts/Roboto-Regular.ttf'),
        });
        this.setState({ loaded: true });
      }
      componentDidMount() {
        this.loadFonts();
        firebase.auth().onAuthStateChanged((user) => {
          if (!user) {
            this.setState({
              loggedIn: false,
            })
          } else {
            this.setState({
              loggedIn: true,
            })
          }
        })

        
      }

    render() {
        const { loggedIn, loaded } = this.state;
        if (!loaded) {
            return null;
        }
        
            return (
              <NavigationContainer theme={theme}>
                 <Stack.Navigator
                        screenOptions={{
                            headerShown: false
                        }}
                        initialRouteName={'LandingPage'}
                    >
                    <Stack.Screen name="LandingPage" component={LandingPage} />   
                    <Stack.Screen name="SignIn" component={SignIn} />   
                    <Stack.Screen name="SignUp" component={SignUp} />
                    <Stack.Screen name="Tutorial" component={Tutorial}/>
                    <Stack.Screen name="ChooseChar" component={ChooseChar}/>
                    <Stack.Screen name="CharDetail" component={CharDetail}/>
                    
                    <Stack.Screen name="TabScreen" component={TabScreen} />
                    <Stack.Screen name="QuestMain" component={QuestMain} />
                    <Stack.Screen name="Meal" component={Meal} />
                    <Stack.Screen name="Recipe" component={Recipe} />
                    <Stack.Screen name="Habit" component={Habit} />
                    <Stack.Screen name="Experience" component={Experience} />
                    <Stack.Screen name="Epic" component={Epic} />
                    <Stack.Screen name="QuestDetail" component={QuestDetail} />
                    <Stack.Screen name="Participate" component={Participate} />
                    <Stack.Screen name="MakeQuestDetail" component={MakeQuestDetail} />


                
                  </Stack.Navigator>
                    
              </NavigationContainer>
            );
        
        /*return(
            <Provider store={store}>
            <NavigationContainer theme={theme}>
                <Stack.Navigator screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'AppMain'}>
                <Stack.Screen name="AppMain" component={AppStack} options={{headerShown:false}}/>
                <Stack.Screen name="Camera" component={CameraScreen} navigation={this.props.navigation}/>
                    
                </Stack.Navigator>
            </NavigationContainer>
            </Provider>
        )
*/
    }
}

export default App

/*
const App = () => {
    const [loaded] = useFonts({
        "Roboto-Black": require('./assets/fonts/Roboto-Black.ttf'),
        "Roboto-Bold": require('./assets/fonts/Roboto-Bold.ttf'),
        "Roboto-Regular": require('./assets/fonts/Roboto-Regular.ttf'),
    })

    if (!loaded) {
        return null;
    }
    return (
        <NavigationContainer theme={theme}>
            <NavigationContainer theme={theme}>
             <Stack.Navigator
                 screenOptions={{
                     headerShown: false
                 }}
                 initialRouteName={'SignIn'}
             >
                <Stack.Screen name="SignIn" component={SignIn} />   
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="Tutorial" component={Tutorial}/>
                <Stack.Screen name="AppMain" component={AppStack} />
       //have to modify
    <Stack.Screen name="TabScreen" component={TabScreen} navigation={this.props.navigation} />
                    <Stack.Screen name="MarketMain" component={MarketMain} navigation={this.props.navigation} />
                    <Stack.Screen name="CafeMain" component={CafeMain} navigation={this.props.navigation} />
                    <Stack.Screen name="DonateMain" component={DonateMain} navigation={this.props.navigation} />
                    <Stack.Screen name="DonationResult" component={DonationResult} navigation={this.props.navigation} />
                    <Stack.Screen name="PaybackMain" component={PaybackMain} navigation={this.props.navigation} />
                    <Stack.Screen name="Payback" component={Payback} navigation={this.props.navigation} />
                    <Stack.Screen name="Payment" component={Payment} navigation={this.props.navigation} />
                    <Stack.Screen name="PayResult" component={PayResult} navigation={this.props.navigation} />
                    <Stack.Screen name="Makequest" component={Makequest}navigation={this.props.navigation} />
                    <Stack.Screen name="Meal" component={Meal}navigation={this.props.navigation} />
                    <Stack.Screen name="MakequestDetail" component={MakequestDetail}navigation={this.props.navigation} />
                
             </Stack.Navigator>
         </NavigationContainer>

        </NavigationContainer>
    )
}

export default App;
*/
