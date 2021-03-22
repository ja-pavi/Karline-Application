import React from 'react';
import{createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../components/RootHome'
import Profile from '../components/AddStudent'
import Create from '../components/Settings'

const Tab = createBottomTabNavigator()

function TabNavigator() {
    return (
    <Tab.Navigator>
         <Tab.Screen name="I'm Here" component={Home} />
         <Tab.Screen name="Student Info" component={Profile} />
         <Tab.Screen name="Settings" component={Create} />
     </Tab.Navigator>
    )}