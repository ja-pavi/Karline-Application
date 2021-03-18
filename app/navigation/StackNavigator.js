import React from 'react';
import{createStackNavigator} from '@react-navigation/stack';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Splash from '../screens/Splash';
import { BlurView } from 'expo';

const Stack = createStackNavigator();
const StackNavigator = () => {
return (
<Stack.Navigator>
     <Stack.Screen 
     name="Splash"
     component={Splash}
     options={{
        title: "Sign In",
        headerStyle: {
        backgroundColor: '#fff',},
        headerTintColor: '#a8dadc',
        headerTitleStyle: 'bold',}}
     />
     <Stack.Screen name="SignIn" component={SignIn}/>
     <Stack.Screen name="SignUp" component={SignUp}/>
 </Stack.Navigator>
)};

export default StackNavigator;