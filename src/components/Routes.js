import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './screens/Login';
import Tasks from './screens/Tasks';
import AddTask from './screens/AddTask';

const Stack = createStackNavigator();

export default class Routes extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {this.props.isLoggedIn ? (
            <>
              <Stack.Screen name="Tasks" component={Tasks} />
              <Stack.Screen name="AddTask" component={AddTask} />
            </>
          ) : (
            <>
              <Stack.Screen name="Login" component={Login} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
