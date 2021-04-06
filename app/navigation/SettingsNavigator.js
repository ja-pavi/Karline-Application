import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import{createStackNavigator} from '@react-navigation/stack';
import Support from '../components/Settings Screens/Support';
import Profile from '../components/Settings Screens/Profile';
import PickUp from '../components/Settings Screens/PickUp';
import MoreSettings from '../components/Settings Screens/MoreSettings';


const Set = createStackNavigator();

const SettingsNavigator = () => {
return (
<NavigationContainer>
<Set.Navigator>
    <Set.Screen name ='Profile' component={Profile}/>
    <Set.Screen name ='Pick Up History' component={PickUp}/>
    <Set.Screen name ='Help and Support' component={Support}/>
    <Set.Screen name ='More Settings' component={MoreSettings}/>
</Set.Navigator>
</NavigationContainer>
)};

export default SettingsNavigator;