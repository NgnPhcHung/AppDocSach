
// export { default } from './ButtonCustom'

// import React, { Component } from 'react'
// import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
// import PropsTypes from 'props-types'

// export class _Button extends Component {
//   render() {
//     const { txtBtn, onPress } = this.props
//     return (
//       <View >
//         <View >
//           <TouchableOpacity  >
//             <View style={styles.button1} >
//               <Text style={styles.text1} >{txtBtn}</Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//       </View>
//     )
//   }
// }

// // class ButtonB extends Components {
// //   rebder(){
// //     const {text, onPress} = this.props
// //     return (
// //       <TouchableOpacity 
// //         style = { styles.button1 }
// //         onPress = {()=> onPress() }
// //       >
// //         <Text style = { styles.text1 } >{text}</Text>
// //       </TouchableOpacity>
// //     )
// //   }
// // }
 
// // ButtonB.propsTypes = {
// //   text: PropsTypes.string.isRequired,
// //   onPress: PropsTypes.func.isRequired,
// // }

// export class ButtonImage extends Component {
//   render() {
//     return (
//       <View style={styles.buttonContaner}>
//         <Image
//           style={styles.buttonImage}
//           source={require('../../../public/image/button.png')}
//         />
//         <Text style={styles.textContaint} >Hahaha</Text>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   button1: {
//     padding: 10,
//     width: 130,
//     height: 50,
//     backgroundColor: '#EAFAF1',
//     borderRadius: 30,
//     borderWidth: 6,
//     borderColor: '#AED6F1',
//     left: "33%",
//   },
//   button2: {
//     padding: 10,
//     width: 130,
//     height: 50,
//     backgroundColor: '#A6ACAF',
//     borderRadius: 30,
//     borderWidth: 6,
//     borderColor: '#5DADE2',
//     left: 120
//   },
//   buttonImage: {
//     rotation: 270,
//   },
//   buttonContaner: {
//     position: "relative",
//     left: "35%"
//   },
//   text1: {
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   textContaint: {
//     position: "absolute",
//     top: '40%',
//     left: "30%"
//   }
// })