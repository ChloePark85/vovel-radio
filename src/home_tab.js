import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from '../assets/icon.png';



class TabHomeScreen extends Component {

render () { 
    return (
    <ScrollView style={styles.container}>
          <Text style={styles.mainText}>오늘의 VoveL Mix</Text>
          <ScrollView style={styles.containerOne} horizontal indicatorStyle={"white"}>
            <TouchableOpacity><Image style={styles.mainImage} resizeMode={"stretch"} source={Icon}></Image></TouchableOpacity>
            <TouchableOpacity><Image style={styles.mainImage} resizeMode={"stretch"} source={Icon}></Image></TouchableOpacity>
            <TouchableOpacity><Image style={styles.mainImage} resizeMode={"stretch"} source={Icon}></Image></TouchableOpacity>
            <TouchableOpacity><Image style={styles.mainImage} resizeMode={"stretch"} source={Icon}></Image></TouchableOpacity>
            <TouchableOpacity><Image style={styles.mainImage} resizeMode={"stretch"} source={Icon}></Image></TouchableOpacity>
          </ScrollView>
        
          <Text style={styles.middleText}>오늘의 VoveL Mix</Text>
          <ScrollView style={styles.containerTwo} horizontal indicatorStyle={"white"}>
            <TouchableOpacity><Image style={styles.mainImage} resizeMode={"stretch"} source={Icon}></Image></TouchableOpacity>
            <TouchableOpacity><Image style={styles.mainImage} resizeMode={"stretch"} source={Icon}></Image></TouchableOpacity>
            <TouchableOpacity><Image style={styles.mainImage} resizeMode={"stretch"} source={Icon}></Image></TouchableOpacity>
            <TouchableOpacity><Image style={styles.mainImage} resizeMode={"stretch"} source={Icon}></Image></TouchableOpacity>
            <TouchableOpacity><Image style={styles.mainImage} resizeMode={"stretch"} source={Icon}></Image></TouchableOpacity>
          </ScrollView>

          <Text style={styles.middleText}>오늘의 VoveL Mix</Text>
          <ScrollView style={styles.containerTwo} horizontal indicatorStyle={"white"}>
            <TouchableOpacity><Image style={styles.mainImage} resizeMode={"stretch"} source={Icon}></Image></TouchableOpacity>
            <TouchableOpacity><Image style={styles.mainImage} resizeMode={"stretch"} source={Icon}></Image></TouchableOpacity>
            <TouchableOpacity><Image style={styles.mainImage} resizeMode={"stretch"} source={Icon}></Image></TouchableOpacity>
            <TouchableOpacity><Image style={styles.mainImage} resizeMode={"stretch"} source={Icon}></Image></TouchableOpacity>
            <TouchableOpacity><Image style={styles.mainImage} resizeMode={"stretch"} source={Icon}></Image></TouchableOpacity>
          </ScrollView>
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
      containerTwo: {
          marginTop:20,
          marginLeft: 40
      },
      mainText: {
        color: "#fff",
        fontSize: 30,
        fontWeight: "700",
        marginTop: 100,
        marginLeft: 40
      },
      middleText: {
        color: "#fff",
        fontSize: 30,
        fontWeight: "700",
        marginTop: 60,
        marginLeft: 40
      },
      mainImage: {
        width: 150,
        height: 150,
        marginBottom: 10,
        marginRight: 10
      },
      containerTwo: {
        flex: 1,
        marginTop: 40,
        marginLeft: 40
      }
    })

export default TabHomeScreen;
