import React from 'react';
import Header from './Header'
import {
    TouchableHighlight,
    StyleSheet, View, Text
} from 'react-native';


const Mantra = props => {
    return (
        <View>
            <Text style={styles.headerText}>müdl</Text>
            <Text style={styles.plainText}>Are you feeling {props.def}?</Text>
            <Text style={styles.plainText}>Here is mantra for you: {props.mantra}</Text>
            <Text style={styles.plainText}>{props.note}</Text>
            <Text style={styles.plainText}>{props.exercise}</Text>
            
        </View>

    )
}



const styles = StyleSheet.create({
    
    headerText: {
        color: '#1ebbd7',
        fontSize: 50,
        marginLeft: 30,
        marginTop: 30,
        marginBottom: 10,
           
    },
    plainText:{
        color: 'blue',
        fontSize: 15,
        marginLeft: 20,
        marginTop: 20,
        marginBottom: 5,
    }
});





export default Mantra;