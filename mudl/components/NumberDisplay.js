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



const NumberDisplay = props => {
    return (
        <View>
            <View style={styles.flexRow}>
                <View style={styles.flexNumber}>
                    <Text style={styles.number}>{props.data.angry}</Text>
                    <Text style={styles.numberDisplay}>ANGRY</Text>
                </View>
                <View style={styles.flexNumber}>
                    <Text style={styles.number}>{props.data.disgusted}</Text>
                    <Text style={styles.numberDisplay}>DISGUSTED</Text>
                </View>
                <View style={styles.flexNumber}>
                    <Text style={styles.number}>{props.data.sad}</Text>
                    <Text style={styles.numberDisplay}>SAD</Text>
                </View>
            </View>

            <View style={styles.flexRow}>
                <View style={styles.flexNumber}>
                    <Text style={styles.number}>{props.data.happy}</Text>
                    <Text style={styles.numberDisplay}>HAPPY</Text>
                </View>
                <View style={styles.flexNumber}>
                    <Text style={styles.number}>{props.data.surprised}</Text>
                    <Text style={styles.numberDisplay}>SURPRISED</Text>
                </View>
                <View style={styles.flexNumber}>
                    <Text style={styles.number}>{props.data.fearful}</Text>
                    <Text style={styles.numberDisplay}>FEARFUL</Text>
                </View>
            </View>
        </View>
    );
}

export default NumberDisplay;

const styles = StyleSheet.create({
    flexRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingBottom: 10
    },
    flexNumber: {
        height: 120,
        width: 120,
        justifyContent: 'center',
        borderColor: '#a0d9d6',
        borderWidth: 4,
        borderRadius: 15,
        opacity: .6,
    },
    number: {
        color: '#a0d9d6',
        fontSize: 100,
        fontWeight: '900',
        opacity: .8,
        textAlign: 'center',
        justifyContent: 'center',
    },
    numberDisplay: {
        color: '#a0d9d6',
        fontSize: 20,
        fontWeight: '900',
        opacity: .6,
        textAlign: 'center',
        marginBottom: 2
    },
});