import React from 'react';
import{createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../components/Home'
import Profile from '../components/Profile'
import Create from '../components/Create'

const Tab = createBottomTabNavigator()
const TabNavigator = () => {
 return <Tab.Navigator>
     <Tab.Screen name="I'm Here" component={Home} />
     <Tab.Screen name="Student Info" component={Profile} />
     <Tab.Screen name="Settings" component={Create} />
 </Tab.Navigator>
}

export default TabNavigator;