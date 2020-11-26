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
    justifyContent: 'flex-start',
  },
  createComps: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    alignSelf: 'stretch',
    marginHorizontal: '10%',
    marginTop: '28%',
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
    textAlignVertical: 'top',
    maxHeight: '35%',
  },
  createButton: {
    backgroundColor: '#FFE3D3',
    marginHorizontal: '7%',
    marginBottom: '9%',
    paddingVertical: 13,
    alignSelf: 'stretch',
    borderRadius: 10,
  },
  createText: {
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

  createTask = async () => {
    this.props.navigation.navigate('Tasks');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>New task</Text>
        <View style={styles.createComps}>
          <Text style={styles.fieldName}>Task name</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Enter task name..."
            value={this.state.taskName}
            multiline={true}
            numberOfLines={6}
            onChangeText={(taskName) => this.setState({taskName})}
          />
        </View>
        <TouchableOpacity style={styles.createButton} onPress={this.createTask}>
          <Text style={styles.createText}>Create</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default AddTask;
