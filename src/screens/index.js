import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Images from './images'

export default class Home extends Component {
  render() {
    return (
      <View>
        <Text style={styles.intro}>Investree Testing!</Text>
        <Images />
        <Text style={styles.intros}>Thanks for FIXED Me !!!</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  intro: {
    fontSize: 30,
    margin: 50,
    marginBottom: 100
  },
  intros: {
    fontSize: 25,
    textAlign: 'center',
    margin: 20
  }
})
