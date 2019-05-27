import React, { Component } from 'react'
import { View, Text, Image, Modal, WebView } from 'react-native'
import CustomButton from '../../../Button/ButtonCustom'

export default class index extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLoading:true,
      dataSourse:[], 
      itemURL:''
    }
  }
  
  componentDidMount(){
    fetch('http://openlibrary.org/api/volumes/brief/json/id:1;lccn:50006784|olid:OL6179000M;lccn:55011330')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading:false,
        dataSourse: responseJson,
        itemURL: responseJson[1].items[0].itemURL
      })
      console.log(responseJson[1].items[0].itemURL)
    })
  }

  change = () => {
    const { change } = this.props
    change()
  }
  render() {
    const { isOpen } = this.props
    return (
      <View>
        <Text>hi there</Text>
      </View>
    )
  }
}

const styles = {
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    color: '#D0D3D4'
  }
}
      // <View>
      //   <View>
      //     <View>
      //       <Text>ConNguoiTuDauDen</Text>
      //     </View>
      //     <View>
      //       <Image 
      //         source = { require('../../../../../public/image/ConNguoiTuDauDen.jpg') }
      //       />
      //     </View>
      //     <CustomButton/>
      //   </View>
      // </View>