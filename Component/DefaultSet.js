/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet,Dimensions, View} from 'react-native';

import { Container, Header, Content, Card, CardItem, Text, Icon, Right } from 'native-base';

export default class DefaultSet extends Component{
  render() {
    return (
      <View style={{paddingLeft:10,paddingRight:10,paddingTop:0,paddingBottom:0}}>
 
            <CardItem >
              <Icon  style={{color:'#7E7E7E',fontSize:20}} name="star"  type='FontAwesome'/>
              <Text  style={{color:'#AAABAB',paddingLeft:5,fontSize:16}}>Your favourite location</Text>
              
             </CardItem>
             <CardItem>
              <Icon  style={{color:'#AAABAB',fontSize:20}} name="home" type='FontAwesome'/>
              <Text  style={{color:'#AAABAB',paddingLeft:5,fontSize:16}}>Home</Text>
              
             </CardItem>
             <CardItem>
             <Icon  style={{color:'#AAABAB',fontSize:20}} name="building" type='FontAwesome'/>
              <Text  style={{color:'#AAABAB',paddingLeft:5,fontSize:16}}>Work</Text>
              
             </CardItem>
             <CardItem>
              <Icon  style={{color:'#AAABAB',fontSize:20}} name="dots-horizontal" type='MaterialCommunityIcons'/>
              <Text  style={{color:'#AAABAB',paddingLeft:5,fontSize:16}}>Others</Text>
              
             </CardItem>
       
      </View>
    );
  }
}


