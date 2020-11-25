import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  containerEven: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 9,
    shadowColor: 'rgba(0, 0, 0, 0.08)',
    shadowOffset: {height: 2},
    shadowOpacity: 0.08,
    elevation: 4,
    marginLeft: '10%',
    alignSelf: 'flex-start',
    marginTop: '2%',
    paddingHorizontal: '2%',
  },
  containerOdd: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 9,
    shadowColor: 'rgba(0, 0, 0, 0.08)',
    shadowOffset: {height: 2},
    shadowOpacity: 0.08,
    elevation: 4,
    marginRight: '10%',
    alignSelf: 'flex-end',
    marginTop: '2%',
    paddingHorizontal: '2%',
  },
  title: {
    marginTop: 15,
    color: '#323232',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 21,
  },
  date: {
    width: 79,
    height: 12,
    color: '#999999',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 10,
    marginBottom: '15%',
  },
  done: {
    marginVertical: '6%',
    color: '#C3FEDA',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#FFFFFF',
    alignSelf: 'stretch',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: '5%',
    shadowColor: 'rgba(0, 0, 0, 0.08)',
    shadowOffset: {height: 2},
    shadowOpacity: 0.08,
    elevation: 4,
  },
});

const TaskItem = ({todoObj}) => {
  const containerStyle =
    todoObj.id % 2 === 1 ? styles.containerEven : styles.containerOdd;
  return (
    <View style={containerStyle}>
      <Text style={styles.title}>{todoObj.title}</Text>
      <Text style={styles.date}>{new Date().toLocaleString()}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.done}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskItem;
