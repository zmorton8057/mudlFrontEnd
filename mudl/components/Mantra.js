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
            <Text style={styles.headerText}>Are you feeling {props.def}?</Text>
            <Text style={styles.plainTextBold}>Why chanting mantras to help focus your attention.</Text>
            <Text style={styles.plainTextBold}>Often when we sit down to meditate our mind jumps from thought to thought, making it difficult to focus our attention. Chanting distracts the mind from frivolous thoughts, helping to anchor the mind in concentration.</Text>
            <Text style={styles.mantraText}>Try this mantra: {props.mantra}</Text>
            <Text style={styles.plainText}>{props.advice}</Text>
        </View>
    )
}


const styles = StyleSheet.create({

    headerText: {
        color: 'white',
        fontSize: 30,
        marginHorizontal: 20,
        marginTop: 30,
        marginBottom: 10,
    },
    plainText: {
        color: 'white',
        fontSize: 20,
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 5,
        fontFamily: 'roboto-regular'
    },
    plainTextBold: {
        color: '#a0d9d6',
        fontSize: 20,
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 5,
        fontFamily: 'roboto-regular',
        fontWeight: 'bold'
    },
    mantraText: {
        color: 'white',
        fontSize: 36,
        marginHorizontal: 30,
        marginTop: 20,
        marginBottom: 5,
        fontFamily : 'hangover-brush'
    }
});


export default Mantra;