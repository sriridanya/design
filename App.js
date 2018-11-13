/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {ScrollView, StyleSheet,Button,TouchableOpacity, Switch, Text, View,Linking} from 'react-native';
import HeaderComp from './Component/Header';
import PickDrop from './Component/PickDrop'
import DefaultSet from './Component/DefaultSet'
import RecentLocation from './Component/RecentLocation';
import SetLocation from './Component/SetLocation'
import {Content }from 'native-base'
// import SlidingUpPanel from 'rn-sliding-up-panel';
import SwipeUpDown from 'react-native-swipe-up-down';

// import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";
import stripe from 'tipsi-stripe';
// stripe.init({
//   publishableKey:'pk_test_MXPIy1ScXx8jemLyBLgLivjx',
  
// });

// const theme = {
//   primaryBackgroundColor: '	#000000',
//   secondaryBackgroundColor: '	#FF0000',
//   primaryForegroundColor: '#FFFF00',
//   secondaryForegroundColor: '#F08080',
//   accentColor: '#0000FF',
//   errorColor: '#FF0000'
// };

export default class App extends Component{
  // componentDidMount() {
    
  //   const options = {
  //     smsAutofillDisabled: true,
  //     requiredBillingAddressFields: 'zip', // or 'full'
  //     theme
  //   };
  //   stripe.paymentRequestWithCardForm(options)
  //     .then(response => {
  //       // Get the token from the response, and send to your server
  //     })
  //     .catch(error => {
  //       // Handle error
  //     });
  // }
  state = {
    visible: false,
    // useLiteCreditCardInput: false 
  }
 
  _pressCall=()=>{
    const url='tel://8300843538'
    Linking.openURL(url)
}
  // _onChange = (formData) => console.log(JSON.stringify(formData, null, " "));
  // _onFocus = (field) => console.log("focusing", field);
  // _setUseLiteCreditCardInput = (useLiteCreditCardInput) => this.setState({ useLiteCreditCardInput });

  render() {
    return (
      
      <View style={styles.container}>
        <HeaderComp/>
        <ScrollView>
        <PickDrop/>
        <DefaultSet/>
        <RecentLocation/>
        <SetLocation/>
        </ScrollView>
        <Text onPress={() => this.swipeUpDownRef.showFull()}>
          {' '}
          Welcome to React Native!{' '}
        </Text>
       <SwipeUpDown		
 hasRef={ref => (this.swipeUpDownRef = ref)} // Pass props component when collapsed
itemFull={ <DefaultSet/> } // Pass props component when show full

	onShowMini={() => console.log('mini')}
	onShowFull={() => console.log('full')}
	onMoveDown={() => console.log('down')}
  onMoveUp={() => console.log('up')}
  
	disablePressToShow={false} // Press item mini to show full
	style={{ backgroundColor: 'green',maxHeight:'50%',marginTop:300}} // style for swipe
/>
    
 
        {/* <SlidingUpPanel
          visible={this.state.visible}
          onRequestClose={() => this.setState({visible: false})}>
          <View style={styles.container}>
{/*    
            <LiteCreditCardInput
              autoFocus
              inputStyle={styles.input}

              validColor={"black"}
              invalidColor={"red"}
              placeholderColor={"darkgray"}

              onFocus={this._onFocus}
              onChange={this._onChange} /> 
              <CreditCardInput
              autoFocus

              requiresName
              requiresCVC
              requiresPostalCode

              labelStyle={styles.label}
              inputStyle={styles.input}
              validColor={"black"}
              invalidColor={"red"}
              placeholderColor={"darkgray"}

              onFocus={this._onFocus}
              onChange={this._onChange} /> 
              <View style={{margin:15,padding:15}}>
                 <Button title='call' onPress={this._pressCall}/>
                 </View>
         <Button title='Hide' onPress={() => this.setState({visible: false})} />
            
        
          
          </View>
        </SlidingUpPanel> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
   
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
   button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 12
  },
  label: {
    color: "blue",
    fontSize: 16,
  },
  input: {
    fontSize: 18,
    color: "white",
  },
  switch: {
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  }
});
