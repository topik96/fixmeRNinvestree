import React, { Component } from 'react'
import { View, Image, Dimensions } from 'react-native'
import { iconLogo, iconBisaTumbuh } from '../assets/images'

const { widths } = Dimensions.get('window')

export default class Images extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: 'column'
        }}>
        <Image
          source={iconLogo}
          resizeMethod="auto"
          resizeMode="center"
          style={{ width: widths - 30, height: 100 }}
        />
        <Image
          source={iconBisaTumbuh}
          resizeMethod="auto"
          resizeMode="center"
          style={{ width: widths - 50, height: 100 }}
        />
      </View>
    )
  }
}
