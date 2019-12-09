import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import Spinner from 'react-native-loading-spinner-overlay';

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  findNodeHandle,
  ImageBackground,
  YellowBox
} from 'react-native';
import Firebase from '../components/Firebase'
import FeelingButton from '../components/Button';
import ResetButton from '../components/ResetButton';
import Header from '../components/Header';
import Mantra from '../components/Mantra';
import API from '../api/api.js';
import BackgroundImage from '../assets/images/Sunset-Background.jpg';
import FireCheck from '../components/FireCheck';
import Navigator from '../navigation/MainTabNavigator';

YellowBox.ignoreWarnings(['Possible Unhandled Promise'])
class HomeScreen extends Component {
  // the state variables are used to populate the moods on the screen by querying the api through the API.updatemoods function
  // primary and secondary states are used to record the last selected emotions for the user
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: null,
      loggedInAs: '',
      moods: [],
      primary: null,
      secondary: null,
      tertiary: null,
      emotions_id: null,
      mantraInfo: {},
      spinner: false
    }
  }
  // updateMoods is the primary function for this page, it can take in any combination of a primary/secondary emotion, only a primary
  // or no emotions in order to query the api and return the primary, secondary, or tertiary emotions relating to the previous selection
  // it does this by updating the moods to the response of our internal api query
  updateMoods(primary_emotion, secondary_emotion) {
    this.setState({ spinner: true })
    let e1 = primary_emotion || null;
    let e2 = secondary_emotion || null;
    API.getMoods(e1, e2)
      .then(data => {
        setTimeout(() => {
          this.setState({
            moods: data.data,
            spinner: !this.state.spinner
          })
          // console.log("log during component did mount")
          // console.log(this.state.moods)
        })
          .catch(err => {
            console.error(err)
          })
      }, 3000)

  }
  // this componentDidMount initializes the first page by running the updateMoods() function with no parameters to get the default
  // first 6 primary emotions
  componentDidMount() {
    FireCheck.authCheck(this)
    this.setState({spinner:true})
    this.setState({ moods: ['happy', 'angry', 'disgusted', 'sad', 'surprised', 'fearful'] })
    setTimeout(() => {
      this.setState({spinner:!this.state.spinner})
    },3000)
    
  }
  // this function get mantra is used to update a new mantra and or advice based on a passed in emotion ID used after final emotion select
  //  and for refreshing page
  getMantraUpdateState(id) {
    this.setState({ spinner: true })
    this.setState({ emotions_id: id })
    API.getMantra(id)
      .then((data) => {
        let json = data.data
        setTimeout(() => {
          // console.log(json)
          this.setState({
            spinner: !this.state.spinner,
            mantraInfo: {
              mantra: json.mantra,
              advice: json.advice.replace(/''/g, "'"),
              def: json.tertiary_emotion_def || json.secondary_emotion_def,
              primary_emotion: json.primary_emotion,
              secondary_emotion: json.secondary_emotion,
              tertiary_emotion: json.tertiary_emotion,
            }
          })
        }, 3000)
      })
  }
  // this handle press is a little tricky. With if statements it determines if a primary or secondary emotion was selected and runs the updateMood()
  // function accordingly and also sets the state of this.state.primary or this.state.secondary to the selected emotion path so that the user
  // can see their last selected emotion
  finalEmotionHandle(tertiary_emotion, id) {
    this.setState({ tertiary: tertiary_emotion })
    // HERE IS FUNCTION TO ADD USER CLICK TO DB
    let user = '';
    if (this.state.loggedInAs === '') {
      user = 'zac'
    } else {
      user = this.state.loggedInAs
    }
    API.addUserEmotion(user, id)
    this.getMantraUpdateState(id)
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
    this.setState({ spinner: true })
    this.setState({ moods: ['happy', 'angry', 'disgusted', 'sad', 'surprised', 'fearful'] })
    this.setState({ primary: null, secondary: null, tertiary: null })
    setTimeout(() => {
      this.setState({ spinner: !this.state.spinner })
    }, 3000)
  }



  render() {
    YellowBox.ignoreWarnings(['Unhandled promise'])
    if (this.state.loggedIn === false) {
      return (
        <View>
          <Header />
          <Firebase />
        </View>
      )
    } else {
      if (this.state.spinner) {
        return (
          <View style={styles.container}>
            <Spinner
              visible={this.state.spinner}
              textContent={'Breathe In... Breathe Out'}
              animation = {"slide"}
              textStyle={styles.spinnerTextStyle}
            />
          </View>
        )
      } else {
        if (this.state.tertiary) {
          let info = this.state.mantraInfo
          return (
            <ScrollView>
              <View style={styles.back}>

                <Header />
                <FeelingButton onPress={() => { this.getMantraUpdateState(this.state.emotions_id) }} emotion={'Get new mantra'}></FeelingButton>
                <Mantra def={info.def} mantra={info.mantra} advice={info.advice}></Mantra>
                <FeelingButton onPress={(e) => this.resetAll(e)} emotion={'Start Over'}></FeelingButton>
              </View>
            </ScrollView>

          )
        } else {
          return (
            <ImageBackground source={BackgroundImage} style={styles.backgroundImage}>
              <ScrollView>
                <View>
                  <Header />
                  {/* this text are just states last chosen emotion(s) */}
                  <View style={styles.lastEmotion}>
                    <Text style={styles.lastEmotionText}>Your last chosen emotion: </Text>
                    <Text style={styles.lastEmotionText}>{(this.state.primary || "") + "-> " + (this.state.secondary || "")}</Text>
                  </View>
                  {

                    // this map function determines if the array contains a primary secondary or tertiary emotion in the array and renders accordingly
                    this.state.moods.map((item, index) => {
                      let button;
                      if (this.state.moods[0].tertiary_emotion) {
                        button = <FeelingButton onPress={(e) => this.finalEmotionHandle(item.tertiary_emotion, item.id)} def={item.tertiary_emotion_def || item.secondary_emotion_def} key={item.tertiary_emotion} emotion={item.tertiary_emotion}></FeelingButton>
                      } else if (this.state.moods[0].secondary_emotion) {
                        button = <FeelingButton onPress={(e) => this.handlePress(e, this.state.primary, item.secondary_emotion)} def={item.secondary_emotion_def} key={item.secondary_emotion} emotion={item.secondary_emotion}></FeelingButton>
                      } else {
                        button = <FeelingButton onPress={(e) => this.handlePress(e, item)} def={null} key={item} emotion={item}></FeelingButton>
                      }
                      return button
                    })
                  }
                  <FeelingButton onPress={(e) => this.resetAll(e)} emotion={'Go to main emotion screen'}></FeelingButton>
                </View>
              </ScrollView>
            </ImageBackground>

          )
        }
      }
    }
  }
}
const styles = StyleSheet.create({

  lastEmotion: {
    height: 75,
    backgroundColor: 'transparent',
  },
  lastEmotionHeader: {
    backgroundColor: '#00232d',
    fontSize: 24,
    color: '#a0d9d6',
    paddingLeft: 8
  },
  lastEmotionText: {
    backgroundColor: '#00232d',
    fontSize: 30,
    color: 'white',
    fontFamily: 'hangover-brush',
    paddingLeft: 8
  },
  back: {
    backgroundColor: '#00232d',
    marginBottom: 10,
    fontFamily: 'hangover-brush'
  },
  backgroundImage: {
    width: '100%',
    height: '100%'
  },
  tutorial: {
    backgroundColor: 'white',
    opacity: .6,
    padding: 5,
    margin: 10,
    fontSize: 12
  },
  tutorialText: {
    color: '#00232d'
  },
  spinnerTextStyle: {
    color: '#FFF'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00232d'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});


export default HomeScreen
