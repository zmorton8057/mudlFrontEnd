import React from 'react';
import {
    TouchableHighlight,
    StyleSheet, View, Text, Dimensions,Image
} from 'react-native';


const HeaderHome = props => {
    return (
        <View style={styles.headerBackground}>
            <Image style={styles.logo} source={require('../mudl-logo-white.png')} />
        </View>

    )
}



const styles = StyleSheet.create({

    headerBackground : {
        backgroundColor: "#00232d"

    },
    logo:{
        width: (Dimensions.get("window").width)*.5,
        height: 75
    }
});





export default HeaderHome;