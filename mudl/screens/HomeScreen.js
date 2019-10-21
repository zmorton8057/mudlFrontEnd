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
import Firebase from '../components/Firebase'
import FeelingButton from '../components/Button';
import HeaderHome from '../components/Header';
import Mantra from '../components/Mantra'
import API from '../api/api.js'

class HomeScreen extends Component {
  // the state variables are used to populate the moods on the screen by querying the api through the API.updatemoods function
  // primary and secondary states are used to record the last selected emotions for the user
  constructor(props) {
    super(props)
    this.state = {
      moods: [],
      primary: null,
      secondary: null,
      tertiary: null,
      mantraInfo: {}
    }
  }
  // updateMoods is the primary function for this page, it can take in any combination of a primary/secondary emotion, only a primary
  // or no emotions in order to query the api and return the primary, secondary, or tertiary emotions relating to the previous selection
  // it does this by updating the moods to the response of our internal api query
  updateMoods(primary_emotion, secondary_emotion) {
    let e1 = primary_emotion || null;
    let e2 = secondary_emotion || null;
    API.getMoods(e1, e2)
      .then(data => {
        this.setState({ moods: data.data })
        // console.log("log during component did mount")
        // console.log(this.state.moods)
      })
      .catch(err => {
        console.error(err)
      })
  }
  // this componentDidMount initializes the first page by running the updateMoods() function with no parameters to get the default
  // first 6 primary emotions
  componentDidMount() {
    this.setState({moods:['happy','angry','disgusted','sad','surprised','fearful']})
  }
  // this handle press is a little tricky. With if statements it determines if a primary or secondary emotion was selected and runs the updateMood()
  // function accordingly and also sets the state of this.state.primary or this.state.secondary to the selected emotion path so that the user
  // can see their last selected emotion
  finalEmotionHandle(tertiary_emotion, id) {
    this.setState({ tertiary: tertiary_emotion })
    API.getMantra(id)
      .then((data) => {
        let json = data.data[0]
        this.setState({
          mantraInfo: {
            mantra: json.mantra,
            exercise: json.exercise,
            note: json.note,
            def: json.tertiary_emotion_def,
            primary_emotion:json.primary_emotion,
            secondary_emotion:json.secondary_emotion,
            tertiary_emotion:json.tertiary_emotion,

          }
        })
      })
  }
  handlePress(e, primary_emotion, secondary_emotion) {
    if (primary_emotion && secondary_emotion) {
      this.updateMoods(primary_emotion, secondary_emotion)
      this.setState({ secondary: secondary_emotion })
    } else if (primary_emotion) {
      this.updateMoods(primary_emotion)
      this.setState({ primary: primary_emotion })
    }
  }
  // this is a function purely for the reset button to go back to the primary emotion list, it also resets this.state.primary and this.state.secondary
  resetAll() {
    this.setState({moods:['happy','angry','disgusted','sad','surprised','fearful']})
    this.setState({ primary: null, secondary: null, tertiary: null })
  }

  render() {
    if (this.state.tertiary) {
      let info = this.state.mantraInfo
      console.log(info)
      return (
        <View>
        <Mantra def={info.def} mantra={info.mantra} exercise={info.exercise} note={info.note}></Mantra>
        <FeelingButton onPress={(e) => this.resetAll(e)} emotion={'reset'}></FeelingButton>
        </View>
      )
    } else {
      return (<View>


        <HeaderHome></HeaderHome>

        {/* this text are just states last chosen emotion(s) */}
        <Text>Your last chosen emotion: {(this.state.primary || "") + "-> " + (this.state.secondary || "")}</Text>
        {

          // this map function determines if the array contains a primary secondary or tertiary emotion in the array and renders accordingly
          this.state.moods.map((item, index) => {
            let button;
            if (this.state.moods[0].tertiary_emotion) {
              button = <FeelingButton onPress={(e) => this.finalEmotionHandle(item.tertiary_emotion, item.id)} key={item.tertiary_emotion} emotion={item.tertiary_emotion}></FeelingButton>
            } else if (this.state.moods[0].secondary_emotion) {
              button = <FeelingButton onPress={(e) => this.handlePress(e, this.state.primary, item.secondary_emotion)} key={item.secondary_emotion} emotion={item.secondary_emotion}></FeelingButton>
            } else {
              button = <FeelingButton onPress={(e) => this.handlePress(e, item)} key={item} emotion={item}></FeelingButton>
            }
            return button
          })
        }
        <FeelingButton onPress={(e) => this.resetAll(e)} emotion={'reset'}></FeelingButton>
      </View>
      )
    }
  }
}


export default HomeScreen
