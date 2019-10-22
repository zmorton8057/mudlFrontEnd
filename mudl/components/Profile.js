import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

const Profile = props => {
    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
          <View style={styles.body}>
          
            <View style={styles.bodyContent}>
            <Text style={styles.name}>{props.user}</Text>
              <Text style={styles.info}>UX Designer / Mobile developer</Text>
              <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>
              
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Opcion 1</Text>  
              </TouchableOpacity>              
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Opcion 2</Text> 
              </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }


const styles = StyleSheet.create({
  header:{
    backgroundColor: "#1ebbd0",
    height:100,
    borderBottomColor:'#51A3A3',
    borderBottomWidth: 15
  },
  avatar: {
    width: 115,
    height: 115,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'flex-start',
    position: 'absolute',
    marginTop:45,
    marginLeft:30
  },
  name:{
    fontSize:22,
    color:"#1ebbd0",
    fontWeight:'600',
    zIndex:1
  },
  body:{
    marginTop:40,
    
  },
  bodyContent: {
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#1ebbd0",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#1ebbd0",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#1ebbd0",
    borderColor:'#51A3A3',
    borderWidth: 3
  },
});

export default Profile;