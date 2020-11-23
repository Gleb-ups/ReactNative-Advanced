import React, {Component} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

class Tasks extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar translucent hidden />
      </View>
    );
  }
}

export default Tasks;
