import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {Button,Input} from 'react-native-elements';
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
 

class Firebase extends React.Component
{

constructor(props)
{
  super(props);
  this.state = ({
    email : '',
    Password : '',
    })
}

signup = (email,Password) =>
{
  try
  {
    firebase.auth().createUserWithEmailAndPassword(email,Password)
  }
  catch(error)
  {
    console.log(error.toString())
  }
  alert('signUp Successful')
}

signin = (email,Password) =>
{
  try
  {
    firebase.auth().signInWithEmailAndPassword(email,Password)
  }
  catch(error)
  {
    console.log(error.toString())
  }
  alert('signIN Successful')
}


  render()
  {
    return(
      <View style = {styles.container}>

      <Input
        placeholder='Enter Email'
        onChangeText = {(email) => this.setState({email})}
      />

      <Input
      placeholder='Enter Password'
      onChangeText = {(Password) => this.setState({Password})}
       />

    <View style = {{marginTop : 40,flexDirection : 'row'}}>
       <Button
       title="Sign In"
       onPress = {() => this.signin(this.state.email,this.state.Password)}
      />

     <Button
       title="Sign UP"
       onPress = {() => this.signup(this.state.email,this.state.Password)}
     />
      </View>
      </View>
      );
  }
}


const styles = StyleSheet.create({
  container :
  {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
  }
});

export default Firebase;
