
import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import {
  Card,
  CardSection,
  Input,
  Button
} from './common';
import { WeatherInfo } from './WeatherInfo';
import axios from 'axios';
export  class WeatherForm extends Component {

  constructor(){
    super();
    this.state={
      city : '',
      temp: null,
      icon: null,
      data : null
    }
  }
  _onPress(){
    //http://api.openweathermap.org/data/2.5/weather?q=${newlocation}&appid=1f03c3f9c7ad7847a4b2b6417894c10d
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=1f03c3f9c7ad7847a4b2b6417894c10d`)
    .then((response) => {
      console.log(response.data)
      this.setState({
        temp : (response.data.main.temp - 273).toFixed(2),

        icon: response.data.weather[0].icon,
        data:response.data
      })
    })
    .catch((error)=>{
    })
    this.setState({
      city : ''
    })

  }
  _onChangeText(text){
    this.setState({
      city : text,
      temp : null
    })
  }
  _renderInfo(){
    if(this.state.temp != null){
      return(

          <CardSection>
            <WeatherInfo
              temp = {this.state.temp}
              icon = {this.state.icon}
              data = {this.state.data}
            />
          </CardSection>


      );
    }
  }
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            onChangeText={this._onChangeText.bind(this)}
            placeholder={" enter city "}
          />
        </CardSection>
        <CardSection>
          <Button onPress = {this._onPress.bind(this)}>
            GO
          </Button>
        </CardSection>
        {this._renderInfo()}
      </Card>
    );
  }
}
