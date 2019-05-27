import React, { Component } from 'react'
import { View, Text, Button, Dimensions } from 'react-native'
import OnlineBookModal from './OnlineBookContainer'
import CustomButton from '../../Button/ButtonCustom'
import { WebView } from 'react-native';
import Pdf from 'react-native-pdf'

export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      dataSourse: [],
      itemURL: ''
    }
  }

  componentDidMount() {
    fetch('http://openlibrary.org/api/volumes/brief/json/id:1;lccn:50006784|olid:OL6179000M;lccn:55011330')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSourse: responseJson,
          itemURL: responseJson[1].items[0].itemURL
        })
        console.log(responseJson[1].items[0].itemURL)
      })
  }
  change() {
    const { change, isOpenModalReducer } = this.props
    change()
    console.log(isOpenModalReducer)
  }
  render() {
    const { isOpenModalReducer, change } = this.props
    const sourse = require('./PDF/DamUocMo.pdf')
    return (
      <View style={styles.container} >
        <Pdf
          source={sourse}
          style = { styles.pdf }
        />
      </View>
    )
  }
}
const styles = {
  button: {
    width: 50,
    height: 40
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
  }
}
