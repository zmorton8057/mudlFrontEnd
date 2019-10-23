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
      this.setState({data: data.data})
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