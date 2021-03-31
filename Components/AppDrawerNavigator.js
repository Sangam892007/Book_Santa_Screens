import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from './AppTabNavigator';
import CustomSideBarMenu from './CustomSideBarMenu';
import Settings from '../Screens/Settings';

export const AppDrawerNavigator = createDrawerNavigator({
    Home:{
        screen:AppTabNavigator
    },
    Settings:{
        screen:Settings
    }
},
{
    contentComponent:CustomSideBarMenu
},
{
    initialRouteName:'Home'
}
)