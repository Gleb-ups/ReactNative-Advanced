import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  loginComps: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    alignSelf: 'stretch',
    marginHorizontal: '10%',
    marginVertical: '18%',
  },
  welcome: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontStyle: 'normal',
    fontSize: 48,
    color: '#323232',
    marginLeft: '10%',
    marginTop: '15%',
  },
  fieldName: {
    fontFamily: 'Roboto',
    marginVertical: '10%',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 21,
    color: '#323232',
    alignSelf: 'stretch',
  },
  inputField: {
    alignSelf: 'stretch',
    backgroundColor: '#FFFFFF',
    color: '#000000',
    borderRadius: 10,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 12.5379,
    shadowColor: 'rgba(0, 0, 0, 0.08)',
    shadowOffset: {height: 2},
    shadowOpacity: 0.08,
    elevation: 4,
    paddingLeft: '4%',
  },
  loginButton: {
    backgroundColor: '#FFE3D3',
    marginHorizontal: '7%',
    marginBottom: '9%',
    paddingVertical: 13,
    alignSelf: 'stretch',
    borderRadius: 10,
  },
  loginText: {
    fontFamily: 'Roboto',
    fontWeight: '900',
    fontStyle: 'normal',
    fontSize: 18,
    color: '#323232',
    textAlign: 'center',
    justifyContent: 'center',
  },
});

class AddTask extends Component {
  state: {
    taskName: string,
  };

  constructor() {
    super();
    this.state = {
      taskName: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar translucent hidden />
        <Text style={styles.welcome}>New task</Text>
        <Text style={styles.fieldName}>Task name</Text>
        <TextInput
          name="taskName"
          style={styles.inputField}
          placeholder="Enter task name..."
          value={this.state.taskName}
          onChangeText={(taskName) => this.setState({taskName})}
        />
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default AddTask;
