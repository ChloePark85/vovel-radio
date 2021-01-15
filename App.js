import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, ScrollView, View, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native' ;  
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabHomeScreen from './src/home_tab';
import TabUserScreen from './src/user_tab';
import TabSearchScreen from './src/search_tab';

const Tab = createBottomTabNavigator();
const TabBarIcon = (focused, name) => {
  let iconImagePath;

  if (name === 'Home') {
    iconImagePath = require('./assets/pics/home.png')
  } else if (name === 'Search') {
    iconImagePath = require('./assets/pics/search.png')
  } else if (name === 'User') {
    iconImagePath = require('./assets/pics/user.png')
  }

  return (
    <Image 
      style={{
        width: focused ? 30: 20,
        height: focused ? 30:20,
      }}
      source = {iconImagePath}/>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          //activeBackgroundColor: 'skyblue',
          activeTintColor: 'blue',
          inactiveTintColor: '#fff',
          style: {
            backgroundColor: '#c6cbef'
          }
        }}
        screenOptions={({route})=>({
          tabBarLabel: route.name, 
          tabBarIcon: ({focused}) =>(
            TabBarIcon(focused, route.name)
          )
        })}
        >
        <Tab.Screen name ="Home" component={TabHomeScreen} />
        <Tab.Screen name ="Search" component={TabSearchScreen} />
        <Tab.Screen name ="User" component={TabUserScreen} />
      </Tab.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#6A82FB',
  //   // alignItems: 'center',
  //   // justifyContent: 'center',
  // },
  // containerOne: {
  //   flex:1,
  //   marginTop: 40,
  //   marginLeft: 40
  // },
  // mainText: {
  //   color: "#fff",
  //   fontSize: 20,
  //   marginBottom: 10
  // },
  // mainImage: {
  //   width: 80,
  //   height: 80,
  //   marginBottom: 10
  // },
  // containerTwo: {
  //   flex: 1,
  //   marginTop: 40,
  //   marginLeft: 40
  // }
});
