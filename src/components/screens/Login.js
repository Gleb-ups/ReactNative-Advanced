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

class Login extends Component {
  state: {
    email: string,
    password: string,
  };

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  loginUser = async () => {
    // auth user
    // and log user credentials only for testing!!!
    console.log(this.state.email, this.state.password);
    this.props.navigation.navigate('Tasks');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to a todo app</Text>
        <View style={styles.loginComps}>
          <Text style={styles.fieldName}>Email</Text>
          <TextInput
            name="email"
            textContentType="emailAddress"
            autoCapitalize="none"
            keyboardType="email-address"
            style={styles.inputField}
            placeholder="Enter email..."
            value={this.state.email}
            onChangeText={(email) => this.setState({email})}
          />
          <Text style={styles.fieldName}>Password</Text>
          <TextInput
            name="password"
            textContentType="password"
            autoCapitalize="none"
            style={styles.inputField}
            placeholder="Enter password..."
            value={this.state.password}
            onChangeText={(password) => this.setState({password})}
          />
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={this.loginUser}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Login;
