import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView
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
import Header from './Header'
import NumberDisplay from './NumberDisplay';


const Profile = props => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Header />
        <View style={styles.headingInfo}>
          <Text style={styles.name}>{props.user}</Text>
          <Text style={styles.info}>30 Day Primary Emotion Log</Text>
        </View>
        <TouchableOpacity onPress={props.press} >
          <Ionicons style={styles.refresh} size={32} name={"md-refresh"}></Ionicons>
        </TouchableOpacity>
        <NumberDisplay data={props.data || {}} />
        <View style={styles.body}>

          <View style={styles.bodyContent}>



            <PieChart

              data={[
                {
                  name: 'Angry',
                  population: (props.data.angry) || .1,
                  color: '#A3E7FC',
                  legendFontColor: '#A3E7FC',
                  legendFontSize: 15,
                },
                {
                  name: 'Disgusted',
                  population: (props.data.disgusted) || .1,
                  color: '#259FC4',
                  legendFontColor: '#A3E7FC',
                  legendFontSize: 15,
                },
                {
                  name: 'Sad',
                  population: (props.data.sad) || .1,
                  color: '#31798E',
                  legendFontColor: '#A3E7FC',
                  legendFontSize: 15,
                },
                {
                  name: 'Happy',
                  population: (props.data.happy) || .1,
                  color: '#394D54',
                  legendFontColor: '#A3E7FC',
                  legendFontSize: 15,
                },
                {
                  name: 'Surprised',
                  population: (props.data.surprised) || .1,
                  color: '#4a646d',
                  legendFontColor: '#A3E7FC',
                  legendFontSize: 15,
                },
                {
                  name: 'Fearful',
                  population: (props.data.fearful) || .1,
                  color: '#90CBDD',
                  legendFontColor: '#A3E7FC',
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
              animate="true"
              animationDuration="300"
            />
          </View>
        </View>
      </View>
    </ScrollView>
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
    fontSize: 30,
    color: "#A3E7FC",
    fontWeight: '600',
    zIndex: 1
  },
  body: {
    marginTop: 10,
  },
  bodyContent: {
    alignItems: 'center',
    padding: 30,
  },
  name: {
    fontSize: 40,
    color: "#ffffff",
    fontWeight: "800",
  },
  info: {
    fontSize: 30,
    color: "#a0d9d6",
    marginTop: 10,
    fontWeight: "600",
  },
  description: {
    fontSize: 16,
    color: "#A3E7FC",
    marginTop: 10,
    textAlign: 'center'
  },
  refresh: {
    textAlign: 'left',
    color: '#a0d9d6',
    margin:10
  },
  container: {
    backgroundColor: '#00232D',
  },
  headingInfo: {
    marginLeft: 10
  }
});

export default Profile;