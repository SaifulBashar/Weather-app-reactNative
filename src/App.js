
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  Header
} from './common';

import { WeatherForm } from './WeatherForm';

export  class App extends Component {
  render() {
    return (
      <View>
        <Header headerText = { " Weather " } />
        <WeatherForm/>
      </View>

    );
  }
}
