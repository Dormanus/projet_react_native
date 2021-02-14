import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import HomeScreen from './src/views/HomeScreen'
import DetailsAlimentation from './src/views/DetailsAlimentation'
import DetailsCosmetique from './src/views/DetailsCosmetique'
import DetailsProduit from './src/views/DetailsProduit'
import InfosScreen from './src/views/InfosScreen'
import ScannerScreen from './src/views/ScannerScreen'

import * as theme from './src/config/theme'

const Modal = createStackNavigator()
const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()


export default function App() {

  const MainStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen  options={{ title: 'Catégories', headerStyle: { backgroundColor: '#FFCC00'}, headerTitleStyle: { fontSize: 29, fontWeight: 'bold', alignSelf: 'center' }, headerTintColor: 'black'}} name="HomeScreen" component={HomeScreen} />
        <Stack.Screen  options={{ title: 'Scan code barre', headerLeft: null, headerStyle: { backgroundColor: '#FFCC00'}, headerTitleStyle: { fontSize: 29, fontWeight: 'bold', alignSelf: 'center' }, headerTintColor: 'black'}} name="Scanner" component={ScannerScreen}/>
        <Stack.Screen  options={{ title: 'Détail du produit', headerLeft: null, headerStyle: { backgroundColor: '#FFCC00'}, headerTitleStyle: { fontSize: 29, fontWeight: 'bold', alignSelf: 'center' }, headerTintColor: 'black'}} name="DetailsAlimentation" component={DetailsAlimentation}/>
        <Stack.Screen  options={{ title: 'Détail du produit', headerLeft: null, headerStyle: { backgroundColor: '#FFCC00'}, headerTitleStyle: { fontSize: 29, fontWeight: 'bold', alignSelf: 'center' }, headerTintColor: 'black'}} name="DetailsCosmetique" component={DetailsCosmetique}/>
        <Stack.Screen  options={{ title: 'Détail du produit', headerLeft: null, headerStyle: { backgroundColor: '#FFCC00'}, headerTitleStyle: { fontSize: 29, fontWeight: 'bold', alignSelf: 'center' }, headerTintColor: 'black'}} name="DetailsProduit" component={DetailsProduit}/>
      </Stack.Navigator>
    )
  }


  const InfoStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen  options={{ title: 'Information', headerStyle: { backgroundColor: '#FFCC00'}, headerTitleStyle: { fontSize: 29, fontWeight: 'bold', alignSelf: 'center' }, headerTintColor: 'black'}} name="Informaton" component={InfosScreen}/>
      </Stack.Navigator>
    )
  }

  return (
    <NavigationContainer>

      <Tab.Navigator 
        tabBarOptions={{
          tabStyle: theme.styles.tabBar,
          labelStyle: theme.styles.tabBarLabel,
          activeTintColor: 'black',
          inactiveTintColor: 'black'
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={MainStack} 
          options={{
            tabBarLabel: "Accueil",
            tabBarIcon: (tabInfo) => <Ionicons name="home" size={24} color={tabInfo.color} />
          }}
        />

        <Stack.Screen 
          name="Information" 
          component={InfoStack} 
          options={{
            tabBarLabel: "nformation",
            tabBarIcon: (tabInfo) => <Ionicons name="question mark" size={24} color={tabInfo.color} />
          }}
        />

      </Tab.Navigator>

      
    </NavigationContainer>
  );
}