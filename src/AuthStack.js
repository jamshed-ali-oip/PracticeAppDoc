import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import Tutorial from './screens/Auth/Tutorial';
import SplashScreen from './screens/Auth/SplashScreen';
import languageChange from './screens/Auth/LanguageChange';
import Login1 from './screens/Auth/Login';
import Signup from './screens/Auth/Signup';
import ForgotPassword from './screens/Auth/ForgotPassword';
import OTP from './screens/Auth/OTP';
import VerifyEmail from './screens/Auth/VerifyEmail';
import CreateNewPassword from './screens/Auth/CreateNewPassword';
import Demographics from './screens/Auth/Demographics';
import Demographics2 from './screens/Auth/Demographics2';
import Acknowledgement from './screens/Auth/Acknowledgement';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
const Authstack = () => {
    const Stack = createSharedElementStackNavigator();
    const options = {
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerShown: false,
    }

    //   const Stack = createSharedElementStackNavigator();
    return (
        <Stack.Navigator screenOptions={options}
        // initialRouteName='PainAnalog'
        >
            {/* authscreens  */}
            <Stack.Screen name="Tutorial" component={Tutorial} />
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="LanguageChange" component={languageChange} />
            <Stack.Screen name="Login" component={Login1} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="OTP" component={OTP} />
            <Stack.Screen name="VerifyEmail" component={VerifyEmail} />
            <Stack.Screen name="CreateNewPassword" component={CreateNewPassword} />
            <Stack.Screen name="Demographics" component={Demographics} />
            <Stack.Screen name="Demographics2" component={Demographics2} />
            <Stack.Screen name="Acknowledgement" component={Acknowledgement} />



            {/* after login screen  */}




        </Stack.Navigator>
    )
}

export default Authstack

const styles = StyleSheet.create({})