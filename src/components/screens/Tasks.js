import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  Text,
  TouchableOpacity,
} from 'react-native';
import TaskItem from '../tasks/TaskItem';
import API from '../../service/todoApi';
import {connect} from 'react-redux';

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
    marginBottom: '10%',
  },
  indicator: {
    flex: 1,
    alignSelf: 'center',
  },
  bookMark: {
    position: 'absolute',
    marginTop: '29%',
    backgroundColor: '#FFE3D3',
    width: 83,
    height: 48,
    right: -12,
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
  actionView: {
    position: 'absolute',
    bottom: '5%',
    right: '6%',
    backgroundColor: '#FFE3D3',
    width: 51,
    height: 51,
    maxHeight: 51,
    maxWidth: 51,
    borderRadius: 25,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  actionButton: {
    width: '100%',
    height: '100%',
    alignSelf: 'stretch',
  },
  actionText: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontStyle: 'normal',
    fontSize: 34.2,
    color: '#323232',
    alignSelf: 'center',
  },
});

class Tasks extends Component {
  state = {
    data: [],
    loading: true,
    doneCount: 0,
  };

  componentDidMount() {
    this.refresh();
  }

  refresh() {
    this._fetchAllTodos().then(() => this.setState({loading: false}));
  }

  _fetchAllTodos = async () => {
    const URL = 'todos/';
    await API.get(URL)
      .then((response) => {
        this.setState(() => ({
          data: Array.from(response.data.slice(0, 20)),
        }));
      })
      .catch((error) => {
        console.log(error);
      });
    let data = this.state.data;
    const lastId = data.length !== 0 ? data[data.length - 1].id : 0;
    this.props.getTasks.tasks.forEach((task, index) => {
      data.push({
        userId: null,
        id: lastId + index + 1,
        title: task.title,
        completed: false,
      });
    });
    this.setState(() => ({data: data, doneCount: data.length}));
  };

  toCreateTask = async () => {
    this.props.navigation.navigate('AddTask');
  };

  render() {
    return !this.state.loading ? (
      <SafeAreaView style={styles.container}>
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
          <Text style={styles.bookMarkText}>{this.state.doneCount}</Text>
        </View>
        <View style={styles.actionView}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={this.toCreateTask}>
            <Text style={styles.actionText}>+</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    ) : (
      <SafeAreaView style={styles.container}>
        <Text style={styles.welcome}>Tasks</Text>
        <ActivityIndicator animating size={'large'} color={'#FFE3D3'} />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  getUser: state.userReducer.getUser,
  getTasks: state.tasksReducer.getTasks,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
