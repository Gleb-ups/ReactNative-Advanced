import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  Text,
} from 'react-native';
import TaskItem from '../tasks/TaskItem';
import API from '../../service/todoApi';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    justifyContent: 'flex-start',
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
  indicator: {
    flex: 1,
    alignSelf: 'center',
  },
  bookMark: {
    position: 'absolute',
    marginTop: '29%',
    backgroundColor: '#FFE3D3',
    width: 81,
    height: 48,
    right: -10,
    maxHeight: 48,
    borderRadius: 13,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  bookMarkText: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontStyle: 'normal',
    fontSize: 18,
    color: '#000000',
  },
});

class Tasks extends Component {
  state = {
    data: [],
    loading: true,
  };
  componentDidMount() {
    this._fetchAllTodos();
  }

  _fetchAllTodos = () => {
    const URL = 'todos/';
    API.get(URL)
      .then((response) => {
        this.setState(() => ({
          data: Array.from(response.data.slice(0, 20)),
          loading: false,
        }));
      })
      .catch((error) => {
        console.log(error);
        // this.setState({error, loading: false});
      });
    // this.setState(() => ({loading: false}));
  };

  render() {
    console.log(this.state.loading);
    return !this.state.loading ? (
      <SafeAreaView style={styles.container}>
        <StatusBar translucent hidden />
        <Text style={styles.welcome}>Tasks</Text>
        <FlatList
          contentContainerStyle={{
            backgroundColor: '#FFFFFF',
          }}
          numColumns={1}
          data={this.state.data}
          renderItem={({item}) => (
            <View
              style={{
                marginBottom: 25,
                width: '100%',
              }}>
              <TaskItem todoObj={item} />
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
        <View style={styles.bookMark}>
          <Text style={styles.bookMarkText}>13</Text>
        </View>
      </SafeAreaView>
    ) : (
      <SafeAreaView style={styles.container}>
        <Text style={styles.welcome}>Tasks</Text>
        <StatusBar translucent hidden />
        <ActivityIndicator animating size={'large'} color={'#FFE3D3'} />
      </SafeAreaView>
    );
  }
}

export default Tasks;
