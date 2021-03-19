import React from 'react';
import{createStackNavigator} from '@react-navigation/stack';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Splash from '../screens/Splash';
import { BlurView } from 'expo';

const Stack = createStackNavigator();
const StackNavigator = () => {
return (
<Stack.Navigator
   screenOptions={{
      headerShown: false
   }}
   >
     <Stack.Screen 
     name="Splash"
     component={Splash}
     options={{
        title: "Klein Carpool",
        headerStyle: {
        backgroundColor: 'transparent',},
        headerTintColor: 'transparent',
        headerTitleStyle: 'bold',}}
     />

     <Stack.Screen 
     name="Sign In"
     component={SignIn}
     options={{
         title: "Sign In",
         headerStyle: {
         backgroundColor: 'transparent',},
         headerTintColor: 'transparent',
         headerTitleStyle: 'bold',}}
      /> 

     <Stack.Screen 
     name="Sign Up" 
     component={SignUp}
     options={{
         title: "Sign Up",
         headerStyle: {
         backgroundColor: 'transparent',},
         headerTintColor: 'transparent ',
         headerTitleStyle: 'bold',}}
     />
   
 </Stack.Navigator>
)};

export default StackNavigator;