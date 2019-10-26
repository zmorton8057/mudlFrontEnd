import React from 'react';
import Header from './Header'
import {
    TouchableHighlight,
    StyleSheet, View, Text,Image,Dimensions
} from 'react-native';


const Mantra = props => {
    return (
        <View>
            <View style={styles.headerBackground}>
            </View>
            <Text style={styles.plainText}>Are you feeling {props.def}?</Text>
            <Text style={styles.plainText}>Here is mantra for you: {props.mantra}</Text>
            <Text style={styles.plainText}>{props.advice}</Text>

        </View>

    )
}



const styles = StyleSheet.create({

    headerText: {
        color: 'white',
        fontSize: 50,
        marginLeft: 30,
        marginTop: 30,
        marginBottom: 10,

    },
    plainText: {
        color: 'white',
        fontSize: 22,
        marginLeft: 20,
        marginTop: 20,
        marginBottom: 5,
        fontFamily : 'Helvetica'
    }
});





export default Mantra;