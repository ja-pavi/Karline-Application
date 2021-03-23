import React from 'react';
import{createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../components/Home'
import Profile from '../components/Profile'
import Create from '../components/Create'
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator()
const TabNavigator = () => {
 return <Tab.Navigator
 screenOptions={({ route }) => ({
     tabBarIcon: ({
        focused, color, size }) => {

            let iconName;

            if (route.name === "I'm Here") {
            iconName = focused
            ? 'car'
            : 'car-outline';} 
            else if (route.name === 'Settings') {
            iconName = focused
            ? 'cog'
            : 'cog-outline';}
            else if (route.name === 'Student Info') {
            iconName = focused
            ? 'person-circle'
            : 'person-circle-outline';}
            
            return <Ionicons name={iconName} size={size} color={color}     />;
            },
            })}
        
            tabBarOptions={{
            activeTintColor: '#5DB6CA',
            inactiveTintColor: 'gray',
            }}
           >
        
     <Tab.Screen name="I'm Here" component={Home} />
     <Tab.Screen name="Student Info" component={Profile} />
     <Tab.Screen name="Settings" component={Create} />
 </Tab.Navigator>
}

export default TabNavigator;