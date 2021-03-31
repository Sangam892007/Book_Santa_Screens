import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import DonateScreen from '../Screens/DonateScreen';
import RequestScreen from '../Screens/RequestScreen';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export const AppTabNavigator = createBottomTabNavigator({
    DonateBooks:{
        screen:DonateScreen,
        navigationOptions:{
            tabBarIcon:<Image source = {require("../assets/splash.png")} style = {{width:50,height:50}} />,
            tabBarLabel:"Donate Books"
        }
    },
    RequestBook:{
        screen:RequestScreen,
        navigationOptions:{
            tabBarIcon:<Image source = {require("../assets/splash.png")} style = {{width:50,height:50}} />,
            tabBarLabel:"Request Books"
        }

    }
})