/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet,  View} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right } from 'native-base';


export default class RecentLocation extends Component{
  render() {
    return (
        <View style={{paddingLeft:10,paddingRight:10,paddingTop:0,paddingBottom:0}}>

 <CardItem >
       <Text style={{color:'#6C6C6C'}}>Recent location</Text>
         
  </CardItem>
 
 <CardItem >
   <Icon  style={{color:'#AAABAB',fontSize:20}} name="back-in-time"  type='Entypo' />
   <Text  style={{color:'#AAABAB',paddingLeft:5,}}>99 Wagon Ave, New City, NY 10956</Text>
   
  </CardItem>
  <View
  style={{
    borderBottomColor: '#CBCBCB',
    marginLeft:45,
    marginRight:45,
    width:'80%',
    borderBottomWidth: 1,
  }}/>
  <CardItem>
  <Icon  style={{color:'#AAABAB',fontSize:20}} name="back-in-time"  type='Entypo' />
     <Text  style={{color:'#AAABAB',paddingLeft:5,}}>327 William Street, NJ 07740</Text>
   
  </CardItem>
  <View
  style={{
    borderBottomColor: '#CBCBCB',
    marginLeft:45,
    marginRight:45,
    width:'80%',
    borderBottomWidth: 1,
  }}/>
  <CardItem>
  <Icon  style={{color:'#AAABAB',fontSize:20}} name="back-in-time"  type='Entypo' />
   <Text  style={{color:'#AAABAB',paddingLeft:5,}}>514 Fulton Rd, Romulus, MI 48174</Text>
   
  </CardItem>
  <View
  style={{
    borderBottomColor: '#CBCBCB',
    marginLeft:45,
    marginRight:45,
    width:'80%',
    borderBottomWidth: 1,
  }}/>
  <CardItem><Icon  style={{color:'#AAABAB',fontSize:20}} name="back-in-time"  type='Entypo' />

   <Text  style={{color:'#AAABAB',paddingLeft:5,}}>500 Pin Oak Road Latrobe, PA 15650</Text>
   
  </CardItem>
  <View
  style={{
    borderBottomColor: '#CBCBCB',
    marginLeft:45,
    marginRight:45,
    width:'80%',
    borderBottomWidth: 1,
  }}/>

</View>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
 
});
