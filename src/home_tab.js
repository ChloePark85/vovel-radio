import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from '../assets/icon.png';



class TabHomeScreen extends Component {

render () { 
    return (
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
    </ScrollView>
    )}
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
    })

export default TabHomeScreen;
