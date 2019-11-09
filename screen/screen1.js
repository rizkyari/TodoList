import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';

class screen1 extends React.Component {
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
            renderItem={({item}) => <Text>{item.key}</Text>}></FlatList>
        </TouchableOpacity>
      </View>
    );
  }
}

export default screen1;
