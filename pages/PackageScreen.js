//This is an example code for Bottom Navigation//
import React from 'react';
//import react in our code.
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { WebView } from 'react-native-webview';
//import all the basic component we have used

export default class PackegeScreen extends React.Component {
  //Detail Screen to show from any Open detail button
  render() {
    return  <WebView source={{ uri: 'https://thailandtourismdirectory.go.th/th/info/attraction/detail/itemid/21344' }} />;
  }
}