import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Dashboard from '../Screens/Dashboard/Dashboard';
import ModelTestScreen from '../Screens/ModalTestScreen.js/ModalTestScreen';
import LoginScreen from '../Screens/LogIn/LoginScreen';
import CustomerIdentificationDetails from '../Screens/CustomerIdentificationDetails/CustomerIdentificationDetails';
import CustomerProfile from '../Screens/CustomerProfile/CustomerProfile';
import SASuccess from '../Screens/SASuccess/SASuccess';
import Scan from '../Screens/QRcodeScanner/Scan'
const Stack = createNativeStackNavigator();

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={'LoginScreen'} component={LoginScreen} />
        <Stack.Screen name={'Dashboard'} component={Dashboard} />
        <Stack.Screen name={'CustomerProfile'} component={CustomerProfile} />
        <Stack.Screen name={'ModelTestScreen'} component={ModelTestScreen} />
        <Stack.Screen
          name={'CustomerIdentificationDetails'}
          component={CustomerIdentificationDetails}
        />
        <Stack.Screen name={'SASuccess'} component={SASuccess} />
        <Stack.Screen name={'Scan'} component={Scan} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
