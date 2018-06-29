import React, { Component } from 'react'
import { View, Image, Dimensions } from 'react-native'
import { iconLogo, iconBisaTumbuh } from '../assets/images';

const { width } = Dimensions.get('window')

export default class Images extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: 'column'
        }}
      >
        <Image
          source={iconLogo}
          resizeMethod="auto"
          resizeMode="center"
          style={{width: width - 30, height: 100}}
        />
        <Image
          source={iconBisaTumbuh}
          resizeMethod="auto"
          resizeMode="center"
          style={{width: width - 50, height: 100}}
        />
      </View>
    )
  }
}