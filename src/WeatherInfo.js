
import React, { Component } from 'react';

import {
  Text,
  View,
  Image
} from 'react-native';
import {
  Card,
  CardSection,
  Input,
  Button
} from './common';

export  class WeatherInfo extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Card containerStyle = {styles.containerStyle}>
        <Image
          style={{width: 50, height: 50}}
          source={{uri :`http://openweathermap.org/img/w/${this.props.icon}.png`}}
        />
        <Text >
        Status:{ this.props.data.weather[0].description }
      </Text>
      <Text >
      it is { this.props.temp }°C
    </Text>
    <Text >
    Max temp:{ (this.props.data.main.temp_max - 273).toFixed(2) }°C
  </Text>
  <Text >
  Min temp:{ (this.props.data.main.temp_min -273).toFixed(2)}°C
</Text>
<Text >
Humidity{ this.props.data.main.humidity }%
</Text>
</Card>
);
}
}

const styles = {
  containerStyle: {
    height:200,
    flex:1,
    justifyContent:'center',
    alignItems: 'center'
  }
};
