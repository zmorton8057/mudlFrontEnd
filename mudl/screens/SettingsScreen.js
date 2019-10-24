import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import Profile from '../components/Profile'
import API from  '../api/api'
import Button from '../components/Button'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit'

class ProfileScreen extends Component {
  // the state variables are used to populate the moods on the screen by querying the api through the API.updatemoods function
  // primary and secondary states are used to record the last selected emotions for the user
  constructor(props) {
    super(props)
    this.state = {
      user:'Zacharai Motron',
      data:null
    }
  }
  getInfo() {
    API.getUserEmotion(1)
    .then((data) => {
      let info =data.data
      for(item in info){
        info[item]= Number(info[item])
      }
      this.setState({data: info})
    })
  }
  componentDidMount(){
    this.getInfo()
  }
  handlePress(){
    this.getInfo()
  }

    render() {
      return (
        <View>
          <Profile data={this.state.data || {}} user={this.state.user} press={() =>{this.handlePress()}}></Profile>
        </View>
      )
    }
  }

  export default ProfileScreen;