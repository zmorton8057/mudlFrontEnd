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
      level: 'primary_emotion',
      primary: ''
    }
  }
  updateMoods(primary_emotion, secondary_emotion) {
    let e1 = primary_emotion || null;
    let e2 = secondary_emotion || null;
    API.getMoods(e1, e2)
      .then(resp => {
        this.setState({ moods: resp.data })
        console.log("log during component did mount")
        console.log(this.state.moods)
      })
      .catch(err => {
        console.error(err)
      })
  }
  componentDidMount() {
    this.updateMoods()
  }
  handlePress(e, primary_emotion, secondary_emotion) {
    if (primary_emotion && secondary_emotion) {
      this.updateMoods(primary_emotion, secondary_emotion)
    } else if (primary_emotion) {
      this.updateMoods(primary_emotion)
      this.setState({ primary: primary_emotion })
    }
  }
  resetAll(){
    this.updateMoods(null,null);
  }

  render() {

    return (<View>
      <HeaderHome></HeaderHome>
      {

        this.state.moods.map((item, index) => {
          console.log(item)
          let button;
          if (this.state.moods[0].tertiary_emotion) {
            button = <FeelingButton class={item.tertiary_emotion} onPress={(e) => this.handlePress(e)} key={item.tertiary_emotion} emotion={item.tertiary_emotion}></FeelingButton>
          } else if (this.state.moods[0].secondary_emotion) {
            button = <FeelingButton class={item.secondary_emotion} onPress={(e) => this.handlePress(e, this.state.primary, item.secondary_emotion)} key={item.secondary_emotion} emotion={item.secondary_emotion}></FeelingButton>
          } else {
            button = <FeelingButton class={item.primary_emotion} onPress={(e) => this.handlePress(e, item.primary_emotion)} key={item.primary_emotion} emotion={item.primary_emotion}></FeelingButton>
          }
          return button
        })
      }
      <FeelingButton onPress={(e)=>this.resetAll(e)} emotion={'reset'}></FeelingButton>
    </View>
    )
  }
}


export default HomeScreen
