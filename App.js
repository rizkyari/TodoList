// import React, { Component } from 'react';
// import { Text, View, TouchableOpacity, Image} from 'react-native';
// import {Text, View, TextInput, Button, FlatList, StyleSheet} from 'react-native';
// import {createAppContainer, createAppNavigator} from 'react-navigation'

// import screen1 from './screen/screen1'
// import screen2 from './screen/screen2'

// import Greeting from './greeting'
// ----- Hello World--------
// export default class HelloWorldApp extends Component {
//   render() {
//     return (
//       <View>
//         <Text>Hello, world!</Text>
//         <Text>Test</Text>
//       </View>
//       )
//     }
//   }

// ----- Buat Button --------
// class App extends Component {

//   handleClick(){
//     alert("clicked");
//   }

//   render(){
//     return(
//       <View>
//         <TouchableOpacity onPress={()=> this.handleClick()}>
//           <Text>
//             Click Me
//           </Text>
//         </TouchableOpacity>
//       </View>
//     )
//   }
// }

// export default App;

// ------ Masukin Gambar -----
// export default class Bananas extends Component {
//   render (){
//     let pic = {
//       uri: 'https://cdn.pixabay.com/photo/2014/10/26/17/19/fishermen-504098__340.jpg'
//     }

//     return (
//       <Image source={pic} style={{width: 415, height:210}}/>
//     )
//   }
// }

// ------ Props -----
// export default class LotsOfGreetings extends Component {
//   render (){
//     return (
//       <View style={{alignItems: 'center', top:50}}>
//         <Greeting name = 'Rizky' />
//         <Greeting name = 'Ari' />
//         <Greeting name = 'Hartono' />
//       </View>
//     )
//   }
// }

// ------ Buat constructor ------
// export default class App extends Component {

//   constructor(){
//     super()
//     this.state = {
//       counter: 0
//     }
//   }

//   render (){
//     return(
//       <View style={{alignItems:'center'}}>
//         <Text>
//           Click The Button To Increment !
//         </Text>
//         <TouchableOpacity onPress={()=> this.setState({counter: this.state.counter + 1})}>
//           <Text>
//             {this.state.counter}
//           </Text>
//         </TouchableOpacity>
//       </View>
//     )
//   }
// }

// export default class Quiz extends Component {

//   constructor(){
//     super()
//     this.state={text: ""}
//   }

//   render () {
//     return (
//       <View>

//         <TextInput
//           placeholder="Type Something"
//           value={this.state.text}
//           onChangeText={(text) => this.setState({text})}/>
//         <Button title="submit" color="green" />

//         <Text>{this.state.text}</Text>
//       </View>
//     )
//   }
// }

// ----- Map Array ---------
// export default class AlignItemBasics extends Component {
//   render (){
//     const cars = ['BMW', 'Porsche', 'Jaguar', 'Range Rover']

//     return (
//       <View>
//         {cars.map((car)=>{ return <Text>{car}</Text>})}
//       </View>
//     )
//   }
// }

// ------ FlatList ----------
// export default class FlatListBasic extends Component {
//   render (){
//     return(
//       <View style={styles.container}>
//         <FlatList
//         data={[
//           {key:"Ari"}, {key:"Budi"}, {key:"Jono"}, {key:"Bambang"},
//           {key:"Rijal"}, {key:"Tono"}, {key:"David"}, {key:"Keith"}
//         ]}
//         renderItem={({item})=> <Text style={styles.item}>{item.key}</Text>}/>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 22
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44
//   }
// })

import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: ['work', 'swim', 'study', 'sleep', 'run'],
    };
  }
  render() {
    return (
      <View>
        <TouchableOpacity>
          <FlatList
            data={this.state.data}
            renderItem={({item}) => <Text>{item}</Text>}
            keyExtractor={(item, index) => index.toString()}></FlatList>
        </TouchableOpacity>
      </View>
    );
  }
}

export default App;
