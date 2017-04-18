import React, { Component } from 'react';
import { AppRegistry, ScrollView, Text, StyleSheet} from 'react-native';

styles=StyleSheet.create({
    scroller: {
        flex: 1,
    }
});

export default class AndroidFonts extends Component{
  render (){
    return(
      <ScrollView style={styles.scroller}>
        <Text style={{fontFamily: 'normal'}}>  normal </Text>
        <Text style={{fontFamily: 'notoserif'}}>  notoserif </Text>
        <Text style={{fontFamily: 'sans-serif'}}>  sans-serif </Text>
        <Text style={{fontFamily: 'sans-serif-light'}}>  sans-serif-light </Text>
        <Text style={{fontFamily: 'sans-serif-thin'}}>  sans-serif-thin </Text>
        <Text style={{fontFamily: 'sans-serif-condensed'}}>  sans-serif-condensed </Text>
        <Text style={{fontFamily: 'sans-serif-medium'}}>  sans-serif-medium </Text>
        <Text style={{fontFamily: 'serif'}}>  serif </Text>
        <Text style={{fontFamily: 'Roboto'}}>  Roboto </Text>
        <Text style={{fontFamily: 'monospace'}}>  monospace </Text>        
      </ScrollView>
    );
  }
}

AppRegistry.registerComponent('AndroidFonts', () => AndroidFonts);