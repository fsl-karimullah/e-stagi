// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Auth/Login';
import Register from './screens/Auth/Register';
import Homepage from './screens/Homepage/Homepage';
import { PaperProvider } from 'react-native-paper';
import BmiScreen from './screens/BmiScreen/BmiScreen';
import ListNews from './screens/ListNews/ListNews';
import DetailNews from './screens/ListNews/DetailNews';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer> 
      <PaperProvider>
      <Stack.Navigator initialRouteName='DetailNews'>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Homepage" component={Homepage} options={{
          title:'Dashboard Sip Sae',
          headerBackVisible:false,
          headerTitleAlign:'center'
        }} />
        <Stack.Screen name="BmiScreen" component={BmiScreen} options={{
          title:'Perhitungan BMI',
          headerBackVisible:false,
          headerTitleAlign:'center'
        }} />
        <Stack.Screen name="ListNews" component={ListNews} options={{
          title:'Berita',
          headerBackVisible:false,
          headerTitleAlign:'center'
        }} />
        <Stack.Screen name="DetailNews" component={DetailNews} options={{
          title:'Detail Berita',
          headerBackVisible:false,
          headerTitleAlign:'center'
        }} />
      </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer> 
  );
}

export default App;