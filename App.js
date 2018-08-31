/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Judul from './Components/Judul';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
       <Judul/>
        <Image source={require('.//image/gmbr.jpg')} />
        <Text style={styles.welcome}>
          Assalamu'alaikum
        </Text>
        <Text style={styles.instructions}>
          Nama  : Akbar Sirajuddin Hanif
        </Text>
        <Text style={styles.instructions}>
          Kelas : XI RPL 1
        </Text>
        <Text style={styles.instructions}>
          No.Absen : 05
        </Text>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
