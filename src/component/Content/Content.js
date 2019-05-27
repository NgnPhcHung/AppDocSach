import React, { Component } from 'react'
import { View, TouchableHighlight, StyleSheet, Button } from 'react-native'

import CustomButton from '../Button/ButtonCustom'

import Logo from './Logo'

export default class Content extends Component {
  navigate() {
    this.props.navigation.navigate('Content')
  }
  static navigationOptions = {
    title: 'Hello !!!',
    headerStyle: {
      backgroundColor: '#EBF5FB',
    },
    headerTitleStyle: {
      paddingLeft: "35%"
    }
  }
  render() {
    return (
      <View>
        <View style = {{ alignItems: 'center', justifyContent: 'center', }} >
          <Logo />
        </View>
        <View style={styles.onLine} >
          <View>
            <CustomButton
              onPress={() => this.props.navigation.navigate('Details')}
              text="Online Book"
            />
          </View>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  onLine: {
    flexDirection: 'row',
    left: "10%",

  },
  btnDocSach: {
    marginLeft: 100
  },
  spaceBtn: {
    left: 50
  },
  docTiep: {
    top: "20%"
  }
})