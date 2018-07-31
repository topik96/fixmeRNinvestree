import React, { Component } from 'react'
import { View, Image, Dimensions } from 'react-native'
import { iconLogos } from '../assets/images';

const { widths } = Dimensions.get('window')

export default class Images extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: 'flex-start'
        }}
      >
        <Image
          source={iconLogos}
          resizeMethod="auto"
          resizeMode="center"
          style={{width: width - 30, height: 100}}
        />
        <Image
          source={iconBisaTumbuh}
          resizeMethod="auto"
          resizeMode="center"
          style={{width: widths - 50, height: 100}}
        />
      </View>
    )
  }
}