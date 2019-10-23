import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit'


const Profile = props => {
  return (

    <View style={styles.container}>
      <View style={styles.header}></View>
      <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
      <View style={styles.body}>

        <View style={styles.bodyContent}>
          <Text style={styles.name}>{props.user}</Text>
          <Text style={styles.info}>30 Day Primary Emotion Log</Text>
          <TouchableOpacity onPress={props.press} >
            <Ionicons style={styles.refresh} size={32} name={"md-refresh"}></Ionicons>
          </TouchableOpacity>

          <PieChart

            data={[
              {
                name: 'Angry',
                population: props.data.angry,
                color: '#A3E7FC',
                legendFontColor: '#00232d',
                legendFontSize: 15,
              },
              {
                name: 'Disgusted',
                population: props.data.disgusted,
                color: '#259FC4',
                legendFontColor: '#00232d',
                legendFontSize: 15,
              },
              {
                name: 'Sad',
                population: props.data.sad,
                color: '#31798E',
                legendFontColor: '#00232d',
                legendFontSize: 15,
              },
              {
                name: 'Happy',
                population: props.data.happy,
                color: '#394D54',
                legendFontColor: '#00232d',
                legendFontSize: 15,
              },
              {
                name: 'Surprised',
                population: props.data.surprised,
                color: '#00232d',
                legendFontColor: '#00232d',
                legendFontSize: 15,
              },
              {
                name: 'Fearful',
                population: props.data.fearful,
                color: '#90CBDD',
                legendFontColor: '#00232d',
                legendFontSize: 15,
              },
            ]}
            width={Dimensions.get("window").width}
            height={220}
            chartConfig={{
              backgroundColor: '#1cc910',
              backgroundGradientFrom: '#eff3ff',
              backgroundGradientTo: '#efefef',
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 20,
              },
            }}
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
          />
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  header: {
    backgroundColor: "#00232d",
    height: 100,
    borderBottomColor: '#51A3A3',
    borderBottomWidth: 15
  },
  avatar: {
    width: 115,
    height: 115,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "#51A3A3",
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 45,
  },
  name: {
    fontSize: 22,
    color: "#00232d",
    fontWeight: '600',
    zIndex: 1
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    alignItems: 'center',
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: "#00232d",
    fontWeight: "600"
  },
  info: {
    fontSize: 16,
    color: "#00232d",
    marginTop: 10
  },
  description: {
    fontSize: 16,
    color: "#00232d",
    marginTop: 10,
    textAlign: 'center'
  },
  refresh: {
    textAlign: 'right'
  }
});

export default Profile;