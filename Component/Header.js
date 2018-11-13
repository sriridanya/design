/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, Image,StyleSheet, ImageBackground,Text, View} from 'react-native';

import {Header,Button,Left,Right}from 'native-base'


export default class HeaderComp extends Component{
  render() {
    return (
   
        <ImageBackground source={{uri:"https://cdn5.vectorstock.com/i/1000x1000/50/49/starry-sky-background-flat-vector-19405049.jpg"}} style={{width: "100%", height: 70}}>
        <Header style={{ backgroundColor: "transparent" }}>
          <Left style={{paddingTop:15}} >
            <Button style={{backgroundColor:'#343434',borderRadius:6}} block>
            <Text style={{color:'white',fontWeight:'bold',fontSize:18,}} > Back</Text>
            </Button>
          </Left>
        
          <Right  style={{paddingTop:15}} >
           <Image source={{uri:"https://img4.androidappsapk.co/300/7/b/c/com.alikeappdriver.png"}} style={{height:50,width:50,}}/>
          </Right>
        </Header>
        </ImageBackground>
    );
  }
}

