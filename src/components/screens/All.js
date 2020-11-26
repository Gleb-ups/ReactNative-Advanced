import React, {Component} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import {connect} from 'react-redux';

import Routes from '../Routes';

class All extends Component {
  render() {
    const {
      authData: {isLoggedIn},
    } = this.props;
    console.log(isLoggedIn);
    return (
      <View style={styles.container}>
        <StatusBar translucent hidden />
        <Routes isLoggedIn={isLoggedIn} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = (state) => ({
  authData: state.authReducer.authData,
});

export default connect(mapStateToProps, null)(All);
