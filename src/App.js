/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import SplashScreen from './screens/Auth/SplashScreen';
import AnimTab2 from './bottomTab/AnimTab2';
import Home from './screens/Home';
import Colors from './constants/Colors';
// import { Provider } from 'react-native-paper';
import Screen from './screens/Screen';
import MyHeader from './components/MyHeader';
import Tutorial from './screens/Auth/Tutorial';
import BottomHome from './screens/BottomScreens/BottomHome';
import Discover from './screens/BottomScreens/Discover';
import Relax from './screens/BottomScreens/Relax';
import Login from './screens/Auth/Login';
import Care from './screens/BottomScreens/Care';
import languageChange from './screens/Auth/LanguageChange';
import ColorScreen from './screens/ColorScreen';
import OTP from './screens/Auth/OTP';
import VerifyEmail from './screens/Auth/VerifyEmail';
import CreateNewPassword from './screens/Auth/CreateNewPassword';
import LanguageChange from './screens/Auth/LanguageChange'
// import DetailsScreen from './screens/shop/DetailsScreen';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import Demographics from './screens/Auth/Demographics';
import Demographics2 from './screens/Auth/Demographics2';
import Acknowledgement from './screens/Auth/Acknowledgement';
import Question1 from './screens/QuestionSF36/Question1';
import Question2 from './screens/QuestionSF36/Question2';
import Question3 from './screens/QuestionSF36/Question3';
import Question4 from './screens/QuestionSF36/Question4';
import Question5 from './screens/QuestionSF36/Question5';
import Signup from './screens/Auth/Signup';
import Home1 from './screens/Home1';
import Question6 from './screens/QuestionSF36/Question6';
import Question7 from './screens/QuestionSF36/Question7';
import Question8 from './screens/QuestionSF36/Question8';
import Question9 from './screens/QuestionSF36/Question9';
import Question10 from './screens/QuestionSF36/Question10';
import Question11 from './screens/QuestionSF36/Question11';
import ForgotPassword from './screens/Auth/ForgotPassword';
import Profile from './screens/BottomScreens/Profile';
import EditProfile from './screens/Profile/EditProfile';
import ChangePasswordProfile from './screens/Profile/ChangePasswordProfile';
import {Provider} from 'react-redux';
import {store, persistor} from '../src/redux/store';
// import { persistor } from './src/redux/store'
import {PersistGate} from 'redux-persist/integration/react';
import Chat from './screens/Chat';
import Support from './screens/Profile/Support';
import TutorialProfile from './screens/Profile/TurotialProfile';
import MyHealthSurvey from './screens/MyHealthSurvey/MyHealthSurvey';
import Question1LES from './screens/QuestionLES/Question1LES';
import Question2LES from './screens/QuestionLES/Question2LES';
import Question3LES from './screens/QuestionLES/Question3LES';
import Question4LES from './screens/QuestionLES/Question4LES';
import Question5LES from './screens/QuestionLES/Question5LES';
import Question6LES from './screens/QuestionLES/Question6LES';
import Question7LES from './screens/QuestionLES/Question7LES';
import Question8LES from './screens/QuestionLES/Question8LES';
import Question9LES from './screens/QuestionLES/Question9LES';
import Question10LES from './screens/QuestionLES/Question10LES';
import Question11LES from './screens/QuestionLES/Question11LES';
import Question12LES from './screens/QuestionLES/Question12LES';
import Question13LES from './screens/QuestionLES/Question13LES';
import Question14LES from './screens/QuestionLES/Question14LES';
import Question15LES from './screens/QuestionLES/Question15LES';
import Question1SR from './screens/QuestionSR/Question1SR';
import Question2SR from './screens/QuestionSR/Question2SR';
import Question3SR from './screens/QuestionSR/Question3SR';
import Question4SR from './screens/QuestionSR/Question4SR';
import Question5SR from './screens/QuestionSR/Question5SR';
import Question6SR from './screens/QuestionSR/Question6SR';
import Question7SR from './screens/QuestionSR/Question7SR';
import Question8SR from './screens/QuestionSR/Question8SR';
import Question9SR from './screens/QuestionSR/Question9SR';
import Question10SR from './screens/QuestionSR/Question10SR';
import Question11SR from './screens/QuestionSR/Question11SR';
import Question12SR from './screens/QuestionSR/Question12SR';
import Question13SR from './screens/QuestionSR/Question13SR';
import Question14SR from './screens/QuestionSR/Question14SR'
import Question15SR from './screens/QuestionSR/Question15SR';
import Question16SR from './screens/QuestionSR/Question16SR';
import Recordandprog from './screens/Recordandprogress/Recordandprog';
import DailyReflection1 from './screens/DailyReflection/DailyReflection1';
import DailyReflection2 from './screens/DailyReflection/DailyReflection2';
import DailyTask1 from './screens/DailyTask/DailyTask1';
import PainAnalog from './screens/Recordandprogress/PainAnalog';
import PainScale from './screens/Recordandprogress/PainScale';
import Records from './screens/Recordandprogress/Records';
import DeleteProfile from './screens/Profile/DeleteProfile';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.black : Colors.white,
  };

  return (
    <>
    <Provider store={store}>
    {/* { console.log(user?.access_token)} */}
    <PersistGate loading={null} persistor={persistor}>
    {/* <Provider> */}
      <SafeAreaView style={backgroundStyle}>
        <StatusBar 
          backgroundColor={'#754d7d'} />
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </SafeAreaView>
    {/* </Provider> */}
    </PersistGate>
    </Provider>
    </>
  );
};

const options = {
  gestureEnabled: true,
  gestureDirection: 'horizontal',
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  headerShown: false,
}

const Stack = createSharedElementStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen name="Tutorial" component={Tutorial} />
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="languageChange" component={languageChange} />
      <Stack.Screen name="Tab2" component={AnimTab2} />
      {/* <Stack.Screen name="Home1" component={Home1} /> */}
      <Stack.Screen name="Screen" component={Screen} />
      <Stack.Screen name="MyHeader" component={MyHeader} />
      <Stack.Screen name="BottomHome" component={BottomHome} />
      <Stack.Screen name="Discover" component={Discover} />
      <Stack.Screen name="Relax" component={Relax} />
      <Stack.Screen name="Care" component={Care} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ColorScreen" component={ColorScreen} />
      <Stack.Screen name="OTP" component={OTP} />
      <Stack.Screen name="VerifyEmail" component={VerifyEmail} />
      <Stack.Screen name="CreateNewPassword" component={CreateNewPassword} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="LanguageChange" component={LanguageChange} />
      <Stack.Screen name="Demographics" component={Demographics} />
      <Stack.Screen name="Demographics2" component={Demographics2} />
      <Stack.Screen name="Acknowledgement" component={Acknowledgement} />
      <Stack.Screen name="Question1" component={Question1} />
      <Stack.Screen name="Question2" component={Question2} />
      <Stack.Screen name="Question3" component={Question3} />
      <Stack.Screen name="Question4" component={Question4} />
      <Stack.Screen name="Question5" component={Question5} />
      <Stack.Screen name="Question6" component={Question6} />
      <Stack.Screen name="Question7" component={Question7} />
      <Stack.Screen name="Question8" component={Question8} />
      <Stack.Screen name="Question9" component={Question9} />
      <Stack.Screen name="Question10" component={Question10} />
      <Stack.Screen name="Question11" component={Question11} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="ChangePasswordProfile" component={ChangePasswordProfile} />
      <Stack.Screen name="Support" component={Support} />
      <Stack.Screen name="TutorialProfile" component={TutorialProfile} />
      <Stack.Screen name="MyHealthSurvey" component={MyHealthSurvey} />
      <Stack.Screen name="Question1LES" component={Question1LES} />
      <Stack.Screen name="Question2LES" component={Question2LES} />
      <Stack.Screen name="Question3LES" component={Question3LES} />
      <Stack.Screen name="Question4LES" component={Question4LES} />
      <Stack.Screen name="Question5LES" component={Question5LES} />
      <Stack.Screen name="Question6LES" component={Question6LES} />
      <Stack.Screen name="Question7LES" component={Question7LES} />
      <Stack.Screen name="Question8LES" component={Question8LES} />
      <Stack.Screen name="Question9LES" component={Question9LES} />
      <Stack.Screen name="Question10LES" component={Question10LES} />
      <Stack.Screen name="Question11LES" component={Question11LES} />
      <Stack.Screen name="Question12LES" component={Question12LES} />
      <Stack.Screen name="Question13LES" component={Question13LES} />
      <Stack.Screen name="Question14LES" component={Question14LES} />
      <Stack.Screen name="Question15LES" component={Question15LES} />
      <Stack.Screen name="Question1SR" component={Question1SR} />
      <Stack.Screen name="Question2SR" component={Question2SR} />
      <Stack.Screen name="Question3SR" component={Question3SR} />
      <Stack.Screen name="Question4SR" component={Question4SR} />
      <Stack.Screen name="Question5SR" component={Question5SR} />
      <Stack.Screen name="Question6SR" component={Question6SR} />
      <Stack.Screen name="Question7SR" component={Question7SR} />
      <Stack.Screen name="Question8SR" component={Question8SR} />
      <Stack.Screen name="Question9SR" component={Question9SR} />
      <Stack.Screen name="Question10SR" component={Question10SR} />
      <Stack.Screen name="Question11SR" component={Question11SR} />
      <Stack.Screen name="Question12SR" component={Question12SR} />
      <Stack.Screen name="Question13SR" component={Question13SR} />
      <Stack.Screen name="Question14SR" component={Question14SR} />
      <Stack.Screen name="Question15SR" component={Question15SR} />
      <Stack.Screen name="Question16SR" component={Question16SR} />
      <Stack.Screen name="Recordandprog" component={Recordandprog} />
      <Stack.Screen name="DailyReflection1" component={DailyReflection1} />
      <Stack.Screen name="DailyReflection2" component={DailyReflection2} />
      <Stack.Screen name="DailyTask1" component={DailyTask1} />
      <Stack.Screen name="PainAnalog" component={PainAnalog} />
      <Stack.Screen name="PainScale" component={PainScale} />
      <Stack.Screen name="Records" component={Records} />
      <Stack.Screen name="DeleteProfile" component={DeleteProfile} />


      

      {/* <Stack.Screen name="Fab" component={Fab} /> */}
      {/* <Stack.Screen name="Drawer1" component={DrawerNav1} /> */}
    </Stack.Navigator>
  )
}

export default App;
