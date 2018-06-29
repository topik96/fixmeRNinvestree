/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  SafeAreaView
} from 'react-native';
import Home from './src/screens'

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Home/>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF'
  }
});
