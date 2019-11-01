import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Platform,
  TextInput,
  TouchableHighlight

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

        <TextInput
          placeholder='Enter Email' style={styles.emailinput} keyboardType= 'email-address'
          onChangeText={(email) => this.setState({ email })}
        />

        <TextInput
          placeholder='Enter Password' style={styles.passwordinput}
          onChangeText={(Password) => this.setState({ Password })}
        />

        <View style={styles.buttongroup}>
          <TouchableHighlight
            style={styles.button}
            title="Sign In"
            onPress={() => this.signin(this.state.email, this.state.Password)}
          ><Text>Sign In</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.button}
            title="Sign Up"
            onPress={() => this.signup(this.state.email, this.state.Password)}
            ><Text>Sign Up</Text>
            </TouchableHighlight>

          <TouchableHighlight
            style={styles.button}
            onPress={this._signOutAsync}
            ><Text>Log Out</Text>
            </TouchableHighlight>
        </View>
        <Text style={styles.loginastext}>{this.state.loggedInAs}</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100
  },
  emailinput: {
    width: 300,
    padding: 10,
    height: 50,
    borderColor: '#a0d9d6',
    marginBottom: 5,
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 5,
    
  },
  passwordinput: {
    width: 300,
    padding: 10,
    height: 50,
    borderColor: '#a0d9d6',
    marginBottom: 5,
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 5,
  },
  buttongroup: {
    marginTop: 20,
    flexDirection: 'row'
  },
  button: {
    margin: 20,
    width: 100,
    height: 50,
    alignItems: 'center',
    backgroundColor: '#a0d9d6',
    borderWidth: 2,
    borderRadius: 5,
    paddingTop: 12
  },
  loginastext: {
    color: 'white'
  }
});

export default Firebase;
