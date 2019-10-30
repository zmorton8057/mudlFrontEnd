import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Platform

} from 'react-native';
import LinksScreen from '../screens/LinksScreen'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});
const HomeStack = createStackNavigator(
  {
    Home: LinksScreen,
  },
  config
);

import { Button, Input } from 'react-native-elements';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBy98Cnc4cAnp5WdQI-P9iJ9sufot772Ec",
  authDomain: "modal-ddf99.firebaseapp.com",
  databaseURL: "https://modal-ddf99.firebaseio.com",
  projectId: "modal-ddf99",
  storageBucket: "modal-ddf99.appspot.com",
  messagingSenderId: "2652816594",
  appId: "1:2652816594:web:b0cdbc6cf357e1ecbf190b",
  measurementId: "G-698SEQ5056"
};


firebase.initializeApp(firebaseConfig)


class Firebase extends React.Component {

  constructor(props) {
    super(props);
    this.state = ({
      email: '',
      Password: '',
      loggedIn: null,
      loggedInAs: ''
    })
  }

  authCheck() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true, loggedInAs: `Logged in as: ${user.email}` })
      } else {
        // this.props.navigation.navigate('Home');
        this.setState({ loggedIn: false });
        this.setState({ loggedIn: true, loggedInAs: `Please log in to continue` })

      }
    });
  }
  componentDidMount() {
    this.authCheck()
  }
  componentWillUnmount() {
  }

  signup = (email, Password) => {
    try {
      firebase.auth().createUserWithEmailAndPassword(email, Password)
        .catch((error) => {
          this.setState({ loggedInAs: 'You are trying an invalid email address' })
        })
    }
    catch (error) {
      this.setState({ loggedInAs: 'email or password is wrong' })
    }
  }

  signin = (email, Password) => {
    try {
      firebase.auth().signInWithEmailAndPassword(email, Password)
        .catch((error) => {
          this.setState({ loggedInAs: 'Email or password is wrong' })
        })
    }
    catch (error) {
      this.setState({ loggedInAs: 'Email or password is wrong' })
    }

  }

  _signOutAsync =  () => {
    this.setState({ loggedIn: false, loggedInAs: 'Please log in to continue' })
    firebase.auth().signOut();
    // await AsyncStorage.clear();
    // this.props.navigation.navigate('Auth');
  };

  render() {
    return (
      <View style={styles.container}>

        <Input
          placeholder='Enter Email'
          onChangeText={(email) => this.setState({ email })}
        />

        <Input
          placeholder='Enter Password'
          onChangeText={(Password) => this.setState({ Password })}
        />

        <View style={{ marginTop: 40, flexDirection: 'row' }}>
          <Button
            style={{ width: 150, padding: 10 }}
            title="Sign In"
            onPress={() => this.signin(this.state.email, this.state.Password)}
          />

          <Button
            style={{ width: 150, padding: 10 }}
            title="Sign UP"
            onPress={() => this.signup(this.state.email, this.state.Password)}
          />

          <Button
            style={{ width: 150, padding: 10 }}
            title="log off"
            onPress={this._signOutAsync}
          />
        </View>
        <Text>{this.state.loggedInAs}</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#1ebbd0'
  }
});

export default Firebase;
