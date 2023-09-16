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
import { Provider as ReduxProvider } from 'react-redux';
import store from './redux/configureStore'
import Profile from './screens/Auth/Profile';
import Naration from './screens/Naration/Naration';
import HistoryScreen from './screens/History/HistoryScreen';
import AboutScreen from './screens/About/AboutScreen';
import QuestionScreen from './screens/Question/QuestionScreen';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer> 
      <ReduxProvider store={store()}>
      <PaperProvider>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Homepage" component={Homepage} options={{
          title:'Dashboard Sip Sae', 
          headerBackVisible:false,
          headerTitleAlign:'center'
        }} />
        <Stack.Screen name="Naration" component={Naration} options={{
          title:'Kumpulan Narasi', 
          headerBackVisible:false,
          headerTitleAlign:'center'
        }} />
        <Stack.Screen name="Profile" component={Profile} options={{
          title:'Data Anda',  
          headerBackVisible:false, 
          headerTitleAlign:'center'
        }} />
        <Stack.Screen name="BmiScreen" component={BmiScreen} options={{
          title:'Perhitungan BMI',
          headerBackVisible:false,
          headerTitleAlign:'center'
        }} />
        <Stack.Screen name="HistoryBMI" component={HistoryScreen} options={{
          title:'History Pengukuran',
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
        <Stack.Screen name="AboutScreen" component={AboutScreen} options={{
          title:'About E - Stagi',
          headerBackVisible:false,
          headerTitleAlign:'center'
        }} />
        <Stack.Screen name="QuestionScreen" component={QuestionScreen} options={{
          title:'Question', 
          headerBackVisible:false,
          headerTitleAlign:'center'
        }} /> 
      </Stack.Navigator>
      </PaperProvider>
      </ReduxProvider>
    </NavigationContainer> 
  );
}

export default App;