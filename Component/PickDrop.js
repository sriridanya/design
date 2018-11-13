/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet,Text,TextInput, View,TouchableOpacity} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body,  Left, Icon } from 'native-base';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
const homePlace = { description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }};
const workPlace = { description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }};

export default class PickDrop extends Component{
    constructor(props) {
        super(props);
        this.state = {pickup: '',drop:''};
      }
  
  render() {
      
    return (
        <View style={{padding:10}} >
          <Card>
            <CardItem style={styles.aligncol} >
     
                <View style={styles.alignrow}>
                <Icon style={{color:'green',paddingTop:8,}} name="life-ring" type="FontAwesome" fontSize='18'/>
                <GooglePlacesAutocomplete
      placeholder='Pick-up Point'
      
      minLength={2} // minimum length of text to search
      autoFocus={false}
      returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
      listViewDisplayed='auto'    // true/false/undefined
      fetchDetails={true}
      renderDescription={row => row.description} // custom description render
      onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
        console.log(data, details);
      
      }}
      
      getDefaultValue={() => ''}
      
      query={{
        // available options: https://developers.google.com/places/web-service/autocomplete
        key: 'AIzaSyBMFkn0fjeSayRVJHzF1urDsHbOW7KYac0',
        language: 'en', // language of the results

      }}
      
      styles={{
        textInputContainer: {
          width: '100%',
          backgroundColor: 'rgba(0,0,0)',
          borderTopWidth: 0,
          borderBottomWidth:0,
          color:'black',
          fontSize:16

    
        },
        description: {
          fontWeight: 'bold'
        },
        predefinedPlacesDescription: {
          color: '#1faadb'
        }
      }}
      
      currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
      currentLocationLabel="Current location"
      nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
      GoogleReverseGeocodingQuery={{
        // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
      }}
      GooglePlacesSearchQuery={{
        // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
        rankby: 'distance',
        types: 'food'
      }}
 
      filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
      predefinedPlaces={[homePlace, workPlace]}
 
      debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
      
      
    />
   
   
                </View>
                <View style={styles.alignrow}>
                  
                    <Icon style={{fontSize:18,paddingTop:0,paddingBottom:0,paddingLeft:5,paddingRight:5}}name="dots-three-vertical" type="Entypo"/>
                    <View
  style={{
    borderBottomColor: '#CBCBCB',
    width:'90%',
    height:10,
    borderBottomWidth: 1,
    marginTop:5
  }}
/>
                    </View>
              
               
         
             
       <View style={styles.alignrow}>
       <Icon style={{color:'red',paddingTop:8}} name="life-ring"  type="FontAwesome"fontSize='18'/>
<GooglePlacesAutocomplete
      placeholder='Drop Point'
      
      minLength={2} // minimum length of text to search
      autoFocus={false}
      returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
      listViewDisplayed='auto'    // true/false/undefined
      fetchDetails={true}
      renderDescription={row => row.description} // custom description render
      onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      
      getDefaultValue={() => ''}
      
      query={{
        // available options: https://developers.google.com/places/web-service/autocomplete
        key: 'AIzaSyBMFkn0fjeSayRVJHzF1urDsHbOW7KYac0',
        language: 'en', // language of the results

      }}
      
      styles={{
        textInputContainer: {
          width: '100%',
          backgroundColor: 'rgba(0,0,0,0)',
          borderTopWidth: 0,
          borderBottomWidth:0,
          color:'black',
          fontSize:16,
          padding:0

    
        },
        description: {
          fontWeight: 'bold'
        },
        predefinedPlacesDescription: {
          color: '#1faadb'
        }
      }}
      
      currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
      currentLocationLabel="Current location"
      nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
      GoogleReverseGeocodingQuery={{
        // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
      }}
      GooglePlacesSearchQuery={{
        // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
        rankby: 'distance',
        types: 'food'
      }}
 
      filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
      predefinedPlaces={[homePlace, workPlace]}
 
      debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
      
      
    />
    </View>
        
            </CardItem>
          </Card>
         </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
 paddingBottom:0,
 marginBottom:0,
 fontSize:20
  
    },
    aligncol:{
        flex: 1, flexDirection: 'column'
    },
   alignrow:{
       flex:1,
       flexDirection:'row',
       justifyContent:'space-evenly'
   }
  });