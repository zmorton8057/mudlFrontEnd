import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import Profile from '../components/Profile'

class ProfileScreen extends Component {
  // the state variables are used to populate the moods on the screen by querying the api through the API.updatemoods function
  // primary and secondary states are used to record the last selected emotions for the user
  constructor(props) {
    super(props)
    this.state = {
      user:'Zacharai Motron',
    }
  }
    render() {
      return (
        <View>
          <Profile user={this.state.user}></Profile>
        </View>

      )
    }
  }

  export default ProfileScreen;