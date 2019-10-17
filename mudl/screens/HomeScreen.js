import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  findNodeHandle
} from 'react-native';

import FeelingButton from '../components/Button';
import HeaderHome from '../components/Header';
import API from '../api/api.js'
console.log('yo')

class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      moods: [],
      zac: 'zac',
      level: 'primary_emotion'
    }
  }
  componentDidMount() {
    API.getMoods()
      .then(resp => {
        this.setState({ moods: resp.data })
        console.log("log during component did mount")
        console.log(this.state.moods)
      })
      .catch(err => {
        console.error(err)
      })
  }
  handlePress(e, item){
    
    

  }
  
  render() {
    
    return (<View>
      <HeaderHome></HeaderHome>
      {
        
        this.state.moods.map((item,index)=>{
          console.log(item)
          let button;
    if (this.state.moods[0].tertiary_emotion){
     button = <FeelingButton class={item.tertiary_emotion} onPress={(e) => this.handlePress(e, item.tertiary_emotion)} key={item.tertiary_emotion} emotion={item.tertiary_emotion}></FeelingButton>
    }else if (this.state.moods[0].secondary_emotion){
     button = <FeelingButton class={item.secondary_emotion}  onPress={(e) => this.handlePress(e, item.secondary_emotion)} key={item.secondary_emotion} emotion={item.secondary_emotion}></FeelingButton>
    }else{
     button = <FeelingButton class={item.primary_emotion} onPress={(e) => this.handlePress(e,item.primary_emotion)} key={item.primary_emotion} emotion={item.primary_emotion}></FeelingButton> 
    }
          return button})
      }
      </View>
    )
  }
}


export default HomeScreen
