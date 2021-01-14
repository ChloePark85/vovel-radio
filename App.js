import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, ScrollView, View, Image, TouchableOpacity } from 'react-native';
import Icon from './assets/icon.png';
import { NavigationContainer } from '@react-navigation/native' ;  
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabHomeScreen from './src/home_tab';
import TabUserScreen from './src/user_tab';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
          <ScrollView style={styles.container}>
      <View style={styles.containerOne}>
        <Text style={styles.mainText}>오늘의 VoveL Mix</Text>
        <TouchableOpacity>
          <Image style={styles.mainImage} resizeMode={"stretch"} source={Icon}></Image>
        </TouchableOpacity>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
      <View style={styles.containerTwo}>
        <Text style={styles.mainText}>오늘의 VoveL Mix</Text>
        <TouchableOpacity>
          <Image style={styles.mainImage} resizeMode={"stretch"} source={Icon}></Image>
        </TouchableOpacity>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
      <Tab.Navigator>
        <Tab.Screen name ="Home" component={TabHomeScreen} />
        <Tab.Screen name ="User" component={TabUserScreen} />
      </Tab.Navigator>
    </ScrollView>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6A82FB',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  containerOne: {
    flex:1,
    marginTop: 40,
    marginLeft: 40
  },
  mainText: {
    color: "#fff",
    fontSize: 20,
    marginBottom: 10
  },
  mainImage: {
    width: 80,
    height: 80,
    marginBottom: 10
  },
  containerTwo: {
    flex: 1,
    marginTop: 40,
    marginLeft: 40
  }
});
