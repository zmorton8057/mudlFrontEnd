import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import Profile from '../components/Profile'
import API from '../api/api'
import Button from '../components/Button'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit'
import FireCheck from '../components/FireCheck'
import Firebase from '../components/Firebase'

class ProfileScreen extends Component {
  // the state variables are used to populate the moods on the screen by querying the api through the API.updatemoods function
  // primary and secondary states are used to record the last selected emotions for the user
  constructor(props) {
    super(props)
    this.state = {
      loggedInAs: '',
      email: null,
      loggedIn: null,
      data: null
    }
  }
  getInfo() {
    // pass in username/uniqure id here to API.getUserEmotion
    API.getUserEmotion(this.state.loggedInAs)
      .then((data) => {
        let info = data.data
        for (item in info) {
          info[item] = Number(info[item])
        }
        this.setState({ data: info })
        console.log(info)
      })
  }
  componentDidMount() {
    FireCheck.authCheck(this)
    this.getInfo()
  }
  handlePress() {
    this.getInfo()
  }

  render() {
    if (this.state.loggedIn === false) {
      return (<Firebase />)
    } else {
      return (
        <View>
          <Profile data={this.state.data || {}} user={this.state.email} press={() => { this.handlePress() }}></Profile>
        </View>
      )
    }
  }
}

export default ProfileScreen;