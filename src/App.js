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

import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import { Provider, useSelector } from 'react-redux';

import { store, persistor } from '../src/redux/store';
// import { persistor } from './src/redux/store'

import { PersistGate } from 'redux-persist/integration/react';

import Main from './Main';



const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    // backgroundColor: isDarkMode ? Colors.black : Colors.white,
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
              <Main />



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




export default App;
