import React from 'react';
import{createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Here from '../components/Here'
import AddCar from '../components/AddCar'
import Settings from '../components/Settings'
import { Ionicons } from '@expo/vector-icons';
import AddStudent from '../components/AddStudent';


const Tab = createBottomTabNavigator()
const TabNavigator = () => {
 return <Tab.Navigator
 screenOptions={({ route }) => ({
     tabBarIcon: ({
        focused, color, size }) => {

            let iconName;

            if (route.name === "I'm Here") {
            iconName = focused
            ? 'checkmark-circle'
            : 'checkmark-circle-outline';} 
            else if (route.name === 'Settings') {
            iconName = focused
            ? 'options'
            : 'options-outline';}
            else if (route.name === 'Student Info') {
            iconName = focused
            ? 'person'
            : 'person-outline';}
            else if (route.name === 'Add Car') {
            iconName = focused
            ? 'car'
            : 'car-outline'
            }
            
            return <Ionicons name={iconName} size={size} color={color}     />;
            },
            })}
        
            tabBarOptions={{
            activeTintColor: '#46c0eb',
            inactiveTintColor: 'gray',
            }}
           >
     
     <Tab.Screen name="I'm Here" component={Here} />
     <Tab.Screen name="Student Info" component={AddStudent} />
     <Tab.Screen name="Add Car" component={AddCar} />
     <Tab.Screen name="Settings" component={Settings} />
 </Tab.Navigator>
}

export default TabNavigator;